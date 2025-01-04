const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getClientLocation = async () => {
  try {
    const res = await fetch("https://ipinfo.io/json");

    const location = await res.json();

    return location;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching client IP:", error.message);
    }
    throw error;
  }
};

export const updateViewCount = async () => {
  try {
    const location = await getClientLocation();
    const ip = location.ip;

    const nowGMT0 = new Date();
    const gmt0Date = nowGMT0.toISOString().split("T")[0];

    const response = await fetch(`${API_BASE_URL}/view-count`, {
      method: "POST",
      body: JSON.stringify({
        ip: ip,
        details: location,
        count: 1,
        lastVisited: gmt0Date,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching view count:", error.message);
    }
    throw error;
  }
};

export const getViewCount = async () => {
  try {
    const location = await getClientLocation();
    const ip = location.ip;
    const response = await fetch(`${API_BASE_URL}/view-count?ip="${ip}"`);

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching view count:", error.message);
    }
    throw error;
  }
};
