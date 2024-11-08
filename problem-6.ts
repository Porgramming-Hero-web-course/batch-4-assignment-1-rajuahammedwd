{
    // 
    // Update Profile
    interface Profile {
      name: string;
      age: number;
      email: string;
    }
    interface PartialProfile {
      name?: string;
      age?: number;
      email?: string;
    }
    
    function updateProfile(profile: Profile, updates: PartialProfile): Profile {
      return { ...profile, ...updates }
    }
    
    const myProfile: Profile = { name: "Alice", age: 25, email: "alice@example.com" }
    const updates: PartialProfile = { name: "Alice", age: 26 }
    const updatedProfile = updateProfile(myProfile, updates)
    console.log(updatedProfile)
    // 
}