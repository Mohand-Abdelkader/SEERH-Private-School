const FIREBASE_URL = "https://seerah-school-default-rtdb.firebaseio.com";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase-config";

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

// login API

export const login = async ({ email, password }) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return {
    user: userCredential.user,
  };
};

export const logout = async () => {
  return auth.signOut();
};

// FOR NEWS API
export async function getNews() {
  try {
    const response = await fetch(`${FIREBASE_URL}/news.json`);

    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }

    const data = await response.json();
    return Object.entries(data || {}).map(([id, news]) => ({
      id,
      ...news,
    }));
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
}

export async function getNewsById(newsId) {
  try {
    const response = await fetch(`${FIREBASE_URL}/news/${newsId}.json`);

    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }

    const data = await response.json();
    return { id: newsId, ...data };
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
}

export async function createNews(newsData) {
  try {
    const response = await fetch(`${FIREBASE_URL}/news.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newsData),
    });

    if (!response.ok) {
      throw new Error("Failed to create news");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating news:", error);
    throw error;
  }
}

export async function updateNews(newsId, newsData) {
  try {
    const response = await fetch(`${FIREBASE_URL}/news/${newsId}.json`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newsData),
    });

    if (!response.ok) {
      throw new Error("Failed to update news");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating news:", error);
    throw error;
  }
}

export async function deleteNews(newsId) {
  try {
    const response = await fetch(`${FIREBASE_URL}/news/${newsId}.json`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete news");
    }

    return { success: true };
  } catch (error) {
    console.error("Error deleting news:", error);
    throw error;
  }
}

// FOR SLIDES API
export async function getSlides() {
  try {
    const response = await fetch(`${FIREBASE_URL}/slides.json`);

    if (!response.ok) {
      throw new Error("Failed to fetch slides");
    }

    const data = await response.json();
    return Object.entries(data || {}).map(([id, slide]) => ({
      id,
      ...slide,
    }));
  } catch (error) {
    console.error("Error fetching slides:", error);
    throw error;
  }
}

export async function getSlideById(slideId) {
  try {
    const response = await fetch(`${FIREBASE_URL}/slides/${slideId}.json`);

    if (!response.ok) {
      throw new Error("Failed to fetch slide");
    }

    const data = await response.json();
    return { id: slideId, ...data };
  } catch (error) {
    console.error("Error fetching slide:", error);
    throw error;
  }
}

export async function createSlide(slideData) {
  try {
    const response = await fetch(`${FIREBASE_URL}/slides.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(slideData),
    });

    if (!response.ok) {
      throw new Error("Failed to create slide");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating slide:", error);
    throw error;
  }
}

export async function updateSlide(slideId, slideData) {
  try {
    const response = await fetch(`${FIREBASE_URL}/slides/${slideId}.json`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(slideData),
    });

    if (!response.ok) {
      throw new Error("Failed to update slide");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating slide:", error);
    throw error;
  }
}

export async function deleteSlide(slideId) {
  try {
    const response = await fetch(`${FIREBASE_URL}/slides/${slideId}.json`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete slide");
    }

    return { success: true };
  } catch (error) {
    console.error("Error deleting slide:", error);
    throw error;
  }
}
