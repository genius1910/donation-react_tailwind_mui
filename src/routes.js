import Index from "./layouts";
import Dashboard from "./pages/dashboard";
import AboutDonation from "./pages/about/aboutDonation.js";
import AboutStand from "./pages/about/aboutStand.js";
import AboutPledge from "./pages/about/aboutPledge.js";

const AppRoutes = [
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/about_donation",
        element: <AboutDonation />,
      },
      {
        path: "/about_stand",
        element: <AboutStand />,
      },
      {
        path: "/about_pledge",
        element: <AboutPledge />,
      },
    ],
  },
];

export default AppRoutes;
