"use client";

import { ConfigProvider, App as AntdApp } from "antd";
import ruRU from "antd/locale/ru_RU";
import type { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider
      locale={ruRU}
      theme={{
        token: {
          colorPrimary: "#0056b3",
          colorInfo: "#0056b3",
          borderRadius: 10,
          fontFamily: "Inter, system-ui, sans-serif",
        },
        components: {
          Button: { fontWeight: 600 },
        },
      }}
    >
      <AntdApp>{children}</AntdApp>
    </ConfigProvider>
  );
}
