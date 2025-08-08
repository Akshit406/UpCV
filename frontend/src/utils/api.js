export async function analyzeResume({ file, jobDescription, baseUrl = import.meta.env.VITE_API_BASE || "" }) {
  const formData = new FormData();
  formData.append("JobDescription", jobDescription);
  formData.append("file", file);

  const res = await fetch(`${baseUrl}/result`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Server error");
  }

  return await res.json();
}