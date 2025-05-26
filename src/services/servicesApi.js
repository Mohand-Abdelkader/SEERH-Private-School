const FIREBASE_URL = "https://seerah-school-default-rtdb.firebaseio.com";

export async function createAdmission(admissionData) {
  try {
    const response = await fetch(`${FIREBASE_URL}/admission.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(admissionData),
    });

    if (!response.ok) {
      throw new Error("Failed to create request");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating request:", error);
    throw error;
  }
}

export async function getAdmissionRequests() {
  try {
    const response = await fetch(`${FIREBASE_URL}/admission.json`);

    if (!response.ok) {
      throw new Error("Failed to fetch requests");
    }

    const data = await response.json();
    return Object.entries(data || {}).map(([id, request]) => ({
      id,
      ...request,
    }));
  } catch (error) {
    console.error("Error fetching requests:", error);
    throw error;
  }
}

export async function deleteAdmissionRequest(requestId) {
  try {
    const response = await fetch(
      `${FIREBASE_URL}/admission/${requestId}.json`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete request");
    }

    return { success: true };
  } catch (error) {
    console.error("Error deleting request:", error);
    throw error;
  }
}
