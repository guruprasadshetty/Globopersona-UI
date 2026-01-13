import { createContext, useContext, useState } from "react";

const CampaignContext = createContext();

export function CampaignProvider({ children }) {
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: "Product Launch",
      subject: "New product is live!",
      audience: "Marketing Leads",
      content: "Check out our new product",
      emails: 1200,
      status: "Active",
    },
  ]);

  const addCampaign = (campaign) => {
    setCampaigns((prev) => [
      {
        ...campaign,
        id: Date.now(),
        emails: Math.floor(Math.random() * 5000) + 500,
        status: "Active",
      },
      ...prev,
    ]);
  };

  return (
    <CampaignContext.Provider value={{ campaigns, addCampaign }}>
      {children}
    </CampaignContext.Provider>
  );
}

export const useCampaigns = () => useContext(CampaignContext);
