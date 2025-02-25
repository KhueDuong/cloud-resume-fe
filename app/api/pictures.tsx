const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const postNewPicture = async ({
  base64ImageData,
  author,
  fileName,
  description,
  email,
}: {
  base64ImageData: string;
  author: string;
  fileName: string;
  description: string;
  email: string;
}) => {
  try {
    const response = await fetch(`${API_BASE_URL}/pictures`, {
      method: "POST",
      body: JSON.stringify({
        author: author,
        fileName: fileName,
        fileContent: base64ImageData,
        description: description,
        email: email,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error posting picture:", error.message);
    }
    throw error;
  }
};

export const getAllPictures = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/pictures`);
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching pictures:", error.message);
    }
    throw error;
  }
};
