"use server";

export async function explainCode(prevState, formData) {
    const code = formData.get("code");
    const language = formData.get("language");

    try {
        const res = await fetcch(process.env.VITE_API_BASE_URL + "/explain", {
            mthod: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ code, language })
        })

        if (!res.ok) {
            return {
                success: false,
                error: "Failed to fetch explanation"
            }
        }

        const data = await res.json();
        return {
            success: true,
            data
        }

    } catch (error) {
       return {
        success: false,
        error: "An error occurred while fetching explanation: " + error.message
       }
    }
}