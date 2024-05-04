"use server";

export async function handleForm (formData) {
    const withChips =  await {withChips:formData.get("withChips"), rating: formData.get("rating"), comment:formData.get("comment")}
    return withChips
  }

