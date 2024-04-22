import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop from "./pages/Desktop";
import Desktop1 from "./pages/Desktop1";
import Desktop2 from "./pages/Desktop2";
import Desktop3 from "./pages/Desktop3";
import Desktop4 from "./pages/Desktop4";
import Desktop5 from "./pages/Desktop5";
import Desktop6 from "./pages/Desktop6";
import Desktop7 from "./pages/Desktop7";
import Desktop8 from "./pages/Desktop8";
import WHATSAPPChannelPartners from "./pages/WHATSAPPChannelPartners";
import WHATSAPPChannelPartners1 from "./pages/WHATSAPPChannelPartners1";
import Desktop9 from "./pages/Desktop9";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-9":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-10":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-3":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-4":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-5":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-8":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-6":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-7":
        title = "";
        metaDescription = "";
        break;
      case "/whatsappchannel-partners01":
        title = "";
        metaDescription = "";
        break;
      case "/whatsappchannel-partners02":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Desktop />} />
      <Route path="/desktop-9" element={<Desktop1 />} />
      <Route path="/desktop-10" element={<Desktop2 />} />
      <Route path="/desktop-3" element={<Desktop3 />} />
      <Route path="/desktop-4" element={<Desktop4 />} />
      <Route path="/desktop-5" element={<Desktop5 />} />
      <Route path="/desktop-8" element={<Desktop6 />} />
      <Route path="/desktop-6" element={<Desktop7 />} />
      <Route path="/desktop-7" element={<Desktop8 />} />
      <Route
        path="/whatsappchannel-partners01"
        element={<WHATSAPPChannelPartners />}
      />
      <Route
        path="/whatsappchannel-partners02"
        element={<WHATSAPPChannelPartners1 />}
      />
      <Route path="/desktop-1" element={<Desktop9 />} />
    </Routes>
  );
}
export default App;
