"use client"

import React from "react";
import styles from "./page.module.css";
import Users from "./movies";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>React Query 101</h1>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ resetErrorBoundary }) => (
              <div>
                There was an error!
                <button onClick={() => resetErrorBoundary()}>Try again</button>
              </div>
            )}
          >
          <React.Suspense fallback={<div>Suspense loading...</div>}>
            <Users />
          </React.Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>

    </main>
  );
}
