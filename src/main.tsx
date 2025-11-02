import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import BookingForm from "./pages/BookingForm.tsx";
import SubmissionPage from "./pages/SubmissionPage.tsx";
import App from "./App.tsx";
import PageFooter from "./components/pageFooter/PageFooter.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="flex flex-col items-center">
        <main className="flex justify-center relative h-screen">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/booking" element={<BookingForm />} />
            <Route path="/submission" element={<SubmissionPage />} />
          </Routes>
        </main>
        <span className="hidden md:block">
          <PageFooter />
        </span>
      </div>
    </BrowserRouter>
  </StrictMode>
);
