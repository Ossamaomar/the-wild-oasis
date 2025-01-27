import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}

export async function createEditCabin(newCabin, id) {

  // https://wxzgbmkegnfupqvooobo.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", '');
  const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

  // 1. Create/edit a cabin
  let query = supabase.from("cabins")

  // A. Create a cabin 
  if(!id) query = query.insert([{...newCabin, image: imagePath}]);

  // B. Edit a cabin
  if(id) query = query.update({...newCabin, image: imagePath}).eq('id', id)

  const { data, error } = await query.select().single();  
  
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // Image already uploaded don't re-upload it  
  if(hasImagePath) return data

  // 2. Upload cabin image
  const { error:storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3. Delete the cabin if there was an error uploading it's image 
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error("Cabin image could not be uploaded");
  }


  return data;
}
