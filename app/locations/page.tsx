import { Suspense } from "react";
import LocationPageContent from "./LocationPageContent";

export default function LocationPage() {
  return (
    <Suspense fallback={<div>Loading locations...</div>}>
      <LocationPageContent />
    </Suspense>
  );
}
