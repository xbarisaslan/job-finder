export async function fetchJobs() {
  try {
    const response = await fetch(
      "https://novel-project-ntj8t.ampt.app/api/jobs",
      {
        headers: {
          Accept: "application/json",
          Authorization: " Bearer xbaris123",
        },
      }
    );

    if (!response.ok) {
      const contentType = response.headers.get("Content-Type");
      const errorDetails = contentType?.includes("application/json")
        ? await response.json()
        : await response.text();
      console.error("Fetch error details:", errorDetails);
      throw new Error(
        `Network response was not ok: ${
          response.statusText
        }. Details: ${JSON.stringify(errorDetails)}`
      );
    }

    return response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
