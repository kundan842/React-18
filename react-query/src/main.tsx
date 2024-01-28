import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// const queryClient = new QueryClient(); //{
// //   defaultOptions: {
// //     queries: {
// //       retry: 3,
// //       cacheTime: 30000, // 5s
// //       staleTime: 10*1000, // 10 s
// //       refetchOnWindowFocus:false,
// //       refetchOnReconnect:false,
// //       refetchOnMount:false
// //     },
// //   },
// // }
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: 3,
//       cacheTime: 30000, // 5s
//       staleTime: 3 * 1000, // 10 s
//       refetchOnWindowFocus: false,
//       refetchOnReconnect: false,
//       refetchOnMount: false,
//     },
//   },
// });
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
  </React.StrictMode>
);
