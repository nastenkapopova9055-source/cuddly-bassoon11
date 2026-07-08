"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "antd";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";

const TILE = 32;
const COLS = 28;
const ROWS = 15;
const TOTAL = 8;

type Device = { x: number; y: number; broken: boolean; type: number };

export default function Game() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [remaining, setRemaining] = useState(TOTAL);
  const [showRepair, setShowRepair] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = COLS * TILE;
    canvas.height = ROWS * TILE;

    if (!CanvasRenderingContext2D.prototype.roundRect) {
      CanvasRenderingContext2D.prototype.roundRect = function (
        x: number,
        y: number,
        w: number,
        h: number,
        r: number
      ) {
        if (r > w / 2) r = w / 2;
        if (r > h / 2) r = h / 2;
        this.moveTo(x + r, y);
        this.lineTo(x + w - r, y);
        this.quadraticCurveTo(x + w, y, x + w, y + r);
        this.lineTo(x + w, y + h - r);
        this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        this.lineTo(x + r, y + h);
        this.quadraticCurveTo(x, y + h, x, y + h - r);
        this.lineTo(x, y + r);
        this.quadraticCurveTo(x, y, x + r, y);
        this.closePath();
        return this;
      };
    }

    const KEY: Record<string, boolean> = {};
    let player = { x: 3, y: 7 };
    let devices: Device[] = [];
    let gameWon = false;
    let raf = 0;

    const drawerFns = [drawRouter, drawAntenna, drawServer, drawCable];

    function drawRouter(cx: number, cy: number, s: number, broken: boolean) {
      const sz = s * 0.75;
      ctx!.fillStyle = broken ? "#e53935" : "#00c853";
      ctx!.shadowColor = broken ? "rgba(229,57,53,0.5)" : "rgba(0,200,83,0.5)";
      ctx!.shadowBlur = 10;
      ctx!.beginPath();
      ctx!.roundRect(cx - sz / 2, cy - sz / 3, sz, sz * 0.6, 4);
      ctx!.fill();
      ctx!.shadowBlur = 0;
      ctx!.fillStyle = "#fff";
      ctx!.fillRect(cx - sz / 4, cy - sz / 3 - 4, sz / 2, 3);
      ctx!.beginPath();
      ctx!.arc(cx, cy, 2, 0, Math.PI * 2);
      ctx!.fillStyle = broken ? "#ff8a80" : "#b9f6ca";
      ctx!.fill();
      ctx!.beginPath();
      ctx!.arc(cx - 5, cy + 4, 1.5, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.beginPath();
      ctx!.arc(cx + 5, cy + 4, 1.5, 0, Math.PI * 2);
      ctx!.fill();
    }

    function drawAntenna(cx: number, cy: number, s: number, broken: boolean) {
      const h = s * 0.85;
      ctx!.fillStyle = broken ? "#e53935" : "#00c853";
      ctx!.shadowColor = broken ? "rgba(229,57,53,0.5)" : "rgba(0,200,83,0.5)";
      ctx!.shadowBlur = 10;
      ctx!.beginPath();
      ctx!.moveTo(cx, cy - h / 2);
      ctx!.lineTo(cx - s / 3, cy + h / 3);
      ctx!.lineTo(cx + s / 3, cy + h / 3);
      ctx!.closePath();
      ctx!.fill();
      ctx!.shadowBlur = 0;
      ctx!.strokeStyle = "#fff";
      ctx!.lineWidth = 1.5;
      ctx!.beginPath();
      ctx!.moveTo(cx, cy - h / 2);
      ctx!.lineTo(cx, cy - h / 2 - 8);
      ctx!.stroke();
      ctx!.beginPath();
      ctx!.arc(cx, cy + h / 3 + 5, 2.5, 0, Math.PI * 2);
      ctx!.fillStyle = broken ? "#ff8a80" : "#b9f6ca";
      ctx!.fill();
    }

    function drawServer(cx: number, cy: number, s: number, broken: boolean) {
      const w = s * 0.65,
        h = s * 0.45;
      ctx!.fillStyle = broken ? "#e53935" : "#00c853";
      ctx!.shadowColor = broken ? "rgba(229,57,53,0.5)" : "rgba(0,200,83,0.5)";
      ctx!.shadowBlur = 10;
      ctx!.beginPath();
      ctx!.roundRect(cx - w / 2, cy - h / 2, w, h, 3);
      ctx!.fill();
      ctx!.shadowBlur = 0;
      ctx!.fillStyle = "rgba(255,255,255,0.25)";
      ctx!.fillRect(cx - 8, cy - 3, 4, 6);
      ctx!.fillRect(cx + 4, cy - 3, 4, 6);
      ctx!.beginPath();
      ctx!.arc(cx, cy, 2.5, 0, Math.PI * 2);
      ctx!.fillStyle = broken ? "#ff8a80" : "#b9f6ca";
      ctx!.fill();
    }

    function drawCable(cx: number, cy: number, s: number, broken: boolean) {
      ctx!.strokeStyle = broken ? "#e53935" : "#00c853";
      ctx!.shadowColor = broken ? "rgba(229,57,53,0.5)" : "rgba(0,200,83,0.5)";
      ctx!.shadowBlur = 8;
      ctx!.lineWidth = 3;
      ctx!.beginPath();
      ctx!.moveTo(cx - s / 2, cy);
      for (let i = 0; i <= 6; i++) {
        const t = i / 6;
        ctx!.lineTo(cx - s / 2 + t * s, cy + Math.sin(t * Math.PI * 3) * 5);
      }
      ctx!.stroke();
      ctx!.shadowBlur = 0;
      ctx!.beginPath();
      ctx!.arc(cx + s / 2 + 3, cy, 2.5, 0, Math.PI * 2);
      ctx!.fillStyle = broken ? "#ff8a80" : "#b9f6ca";
      ctx!.fill();
    }

    function makeDevices() {
      devices = [];
      const positions: { x: number; y: number }[] = [];
      for (let i = 0; i < TOTAL; i++) {
        let x = 0,
          y = 0,
          tries = 0;
        do {
          x = 2 + Math.floor(Math.random() * (COLS - 4));
          y = 2 + Math.floor(Math.random() * (ROWS - 4));
          tries++;
        } while (
          tries < 200 &&
          (Math.abs(x - player.x) + Math.abs(y - player.y) < 4 ||
            positions.some((p) => Math.abs(p.x - x) + Math.abs(p.y - y) < 3))
        );
        positions.push({ x, y });
        devices.push({ x, y, broken: true, type: i % 4 });
      }
    }

    function drawFloor() {
      for (let y = 0; y < ROWS; y++)
        for (let x = 0; x < COLS; x++) {
          if ((x + y) % 2 === 0) {
            ctx!.fillStyle = "rgba(255,255,255,0.02)";
            ctx!.fillRect(x * TILE, y * TILE, TILE, TILE);
          }
        }
    }

    function drawPlayer() {
      const cx = player.x * TILE + TILE / 2;
      const cy = player.y * TILE + TILE / 2;
      ctx!.fillStyle = "#42a5f5";
      ctx!.shadowColor = "rgba(66,165,245,0.5)";
      ctx!.shadowBlur = 12;
      ctx!.beginPath();
      ctx!.arc(cx, cy - 3, 7, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.fillStyle = "#ffd54f";
      ctx!.beginPath();
      ctx!.arc(cx, cy - 7, 5, Math.PI, 0);
      ctx!.fill();
      ctx!.shadowBlur = 0;
      ctx!.fillStyle = "#1565c0";
      ctx!.fillRect(cx - 5, cy + 3, 10, 11);
      ctx!.fillStyle = "#0d47a1";
      ctx!.fillRect(cx - 6, cy + 12, 12, 3);
      ctx!.fillRect(cx - 6, cy - 1, 3, 7);
      ctx!.fillRect(cx + 3, cy - 1, 3, 7);
      ctx!.fillStyle = "#fff";
      ctx!.beginPath();
      ctx!.arc(cx - 3, cy - 5, 1.5, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.beginPath();
      ctx!.arc(cx + 3, cy - 5, 1.5, 0, Math.PI * 2);
      ctx!.fill();
    }

    function drawDevices() {
      devices.forEach((d) => {
        const cx = d.x * TILE + TILE / 2;
        const cy = d.y * TILE + TILE / 2;
        drawerFns[d.type](cx, cy, TILE * 0.8, d.broken);
        if (d.broken) {
          ctx!.fillStyle = "#ff5252";
          ctx!.font = "bold 16px Inter, sans-serif";
          ctx!.textAlign = "center";
          ctx!.textBaseline = "middle";
          ctx!.fillText("!", cx, cy - 2);
        }
      });
    }

    function drawVictory() {
      ctx!.fillStyle = "rgba(0,0,0,0.6)";
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);
      ctx!.fillStyle = "#00c853";
      ctx!.shadowColor = "rgba(0,200,83,0.6)";
      ctx!.shadowBlur = 24;
      ctx!.font = "bold 34px Inter, sans-serif";
      ctx!.textAlign = "center";
      ctx!.textBaseline = "middle";
      ctx!.fillText(
        "Сеть работает! Все устройства исправны",
        canvas!.width / 2,
        canvas!.height / 2 - 12
      );
      ctx!.shadowBlur = 0;
      ctx!.fillStyle = "rgba(255,255,255,0.6)";
      ctx!.font = "16px Inter, sans-serif";
      ctx!.fillText(
        "Нажми «Заново» чтобы пройти ещё раз",
        canvas!.width / 2,
        canvas!.height / 2 + 28
      );
    }

    function canMove(x: number, y: number) {
      return x >= 1 && x < COLS - 1 && y >= 1 && y < ROWS - 1;
    }

    function getNearestBroken(px: number, py: number): Device | null {
      let best: Device | null = null;
      let bestDist = Infinity;
      devices.forEach((d) => {
        if (!d.broken) return;
        const dist = Math.abs(d.x - px) + Math.abs(d.y - py);
        if (dist < bestDist) {
          bestDist = dist;
          best = d;
        }
      });
      return bestDist <= 2 ? best : null;
    }

    function repairDevice() {
      const d = getNearestBroken(player.x, player.y);
      if (d) {
        d.broken = false;
        setScore((s) => {
          const next = s + 1;
          setRemaining(TOTAL - next);
          if (next === TOTAL) gameWon = true;
          return next;
        });
      }
    }

    function loop() {
      if (!gameWon) {
        let dx = 0,
          dy = 0;
        if (KEY["ArrowLeft"] || KEY["KeyA"]) dx = -1;
        if (KEY["ArrowRight"] || KEY["KeyD"]) dx = 1;
        if (KEY["ArrowUp"] || KEY["KeyW"]) dy = -1;
        if (KEY["ArrowDown"] || KEY["KeyS"]) dy = 1;
        if (dx !== 0 && dy !== 0) dx = 0;
        if ((dx || dy) && canMove(player.x + dx, player.y + dy)) {
          player.x += dx;
          player.y += dy;
        }
        if (KEY["Space"]) {
          repairDevice();
          KEY["Space"] = false;
        }
      }
      ctx!.fillStyle = "#1a2332";
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);
      drawFloor();
      drawDevices();
      drawPlayer();
      if (gameWon) drawVictory();
      raf = requestAnimationFrame(loop);
    }

    const onKeyDown = (e: KeyboardEvent) => {
      KEY[e.code] = true;
      if (
        ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "KeyW", "KeyA", "KeyS", "KeyD"].includes(
          e.code
        )
      )
        e.preventDefault();
    };
    const onKeyUp = (e: KeyboardEvent) => {
      KEY[e.code] = false;
    };

    const onClick = (e: MouseEvent) => {
      if (gameWon) return;
      const rect = canvas!.getBoundingClientRect();
      const mx = (e.clientX - rect.left) * (canvas!.width / rect.width);
      const my = (e.clientY - rect.top) * (canvas!.height / rect.height);
      const tx = Math.floor(mx / TILE);
      const ty = Math.floor(my / TILE);
      const d = getNearestBroken(tx, ty);
      if (d) {
        player.x = d.x - 1;
        player.y = d.y;
        repairDevice();
      }
    };

    let touchStartX = 0,
      touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      const t = e.touches[0];
      touchStartX = t.clientX;
      touchStartY = t.clientY;
      setShowRepair(true);
    };
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (gameWon) return;
      const t = e.touches[0];
      const dx = t.clientX - touchStartX;
      const dy = t.clientY - touchStartY;
      if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return;
      let moveX = 0,
        moveY = 0;
      if (Math.abs(dx) > Math.abs(dy)) moveX = dx > 0 ? 1 : -1;
      else moveY = dy > 0 ? 1 : -1;
      if (canMove(player.x + moveX, player.y + moveY)) {
        player.x += moveX;
        player.y += moveY;
      }
      touchStartX = t.clientX;
      touchStartY = t.clientY;
    };
    const onTouchEnd = (e: TouchEvent) => e.preventDefault();

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    canvas.addEventListener("click", onClick);
    canvas.addEventListener("touchstart", onTouchStart, { passive: false });
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd, { passive: false });

    makeDevices();
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      canvas.removeEventListener("click", onClick);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  const reset = () => {
    setScore(0);
    setRemaining(TOTAL);
    setShowRepair(false);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    // re-mount effect by forcing a key change would be cleaner; simplest: reload state via remount
  };

  return (
    <section id="game" className="section-anchor py-20 sm:py-24" style={{ background: "#1a2332" }}>
      <div className="mx-auto max-w-content px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel icon="fa-gamepad" center>
              Интерактив
            </SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Стань сервисным инженером
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-white/70">
              Управляй инженером: на ПК — <strong>WASD</strong> /{" "}
              <strong>стрелки</strong>, на телефоне — <strong>свайп</strong> по
              экрану. Подойди к неисправному устройству и нажми{" "}
              <strong>Пробел</strong> (ПК) или кнопку <strong>🔧</strong>{" "}
              (телефон), чтобы починить.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <div className="mx-auto max-w-[940px] rounded-card border border-white/10 bg-white/5 p-5">
            <canvas
              ref={canvasRef}
              className="w-full rounded-lg"
              style={{ aspectRatio: `${COLS * TILE} / ${ROWS * TILE}`, background: "#1a2332" }}
            />
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm text-white">
                <i className="fas fa-wrench text-accent" /> Починено: {score}
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm text-white">
                <i className="fas fa-exclamation-triangle text-amber-400" /> Осталось: {remaining}
              </span>
              {showRepair && (
                <Button
                  className="!bg-accent !text-white"
                  icon={<i className="fas fa-wrench" />}
                  onClick={() => {
                    const ev = new KeyboardEvent("keydown", { code: "Space" });
                    window.dispatchEvent(ev);
                  }}
                >
                  Чинить
                </Button>
              )}
              <Button
                className="!bg-accent !text-white"
                icon={<i className="fas fa-redo" />}
                onClick={() => window.location.reload()}
              >
                Заново
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
