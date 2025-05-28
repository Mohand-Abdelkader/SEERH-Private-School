const FIREBASE_URL = "https://seerah-school-default-rtdb.firebaseio.com";

//FOR ADMISSION API
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

export async function getAdmissionById(admissionId) {
  try {
    const response = await fetch(
      `${FIREBASE_URL}/admission/${admissionId}.json`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch admission request");
    }

    const data = await response.json();
    return { id: admissionId, ...data };
  } catch (error) {
    console.error("Error fetching admission request:", error);
    throw error;
  }
}

// FOR CONTACT MESSAGE API
export async function createMessage(messageData) {
  try {
    const response = await fetch(`${FIREBASE_URL}/contact.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageData),
    });

    if (!response.ok) {
      throw new Error("Failed to create message");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating message:", error);
    throw error;
  }
}

export async function getMessages() {
  try {
    const response = await fetch(`${FIREBASE_URL}/contact.json`);

    if (!response.ok) {
      throw new Error("Failed to fetch messages");
    }

    const data = await response.json();
    return Object.entries(data || {}).map(([id, message]) => ({
      id,
      ...message,
    }));
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
}

export async function deleteMessage(messageId) {
  try {
    const response = await fetch(`${FIREBASE_URL}/contact/${messageId}.json`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete message");
    }

    return { success: true };
  } catch (error) {
    console.error("Error deleting message:", error);
    throw error;
  }
}
export async function getMessageById(messageId) {
  try {
    const response = await fetch(`${FIREBASE_URL}/contact/${messageId}.json`);

    if (!response.ok) {
      throw new Error("Failed to fetch message");
    }

    const data = await response.json();
    return { id: messageId, ...data };
  } catch (error) {
    console.error("Error fetching message:", error);
    throw error;
  }
}
