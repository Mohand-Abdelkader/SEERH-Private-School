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
