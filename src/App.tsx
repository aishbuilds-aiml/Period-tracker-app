import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import HygienePage from "./pages/HygienePage";
import MythsPage from "./pages/MythsPage";
import ProductsPage from "./pages/ProductsPage";
import HealthPage from "./pages/HealthPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import TrackerPage from "./pages/TrackerPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/hygiene" element={<HygienePage />} />
          <Route path="/myths" element={<MythsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/health" element={<HealthPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/tracker" element={<TrackerPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
