import { Suspense } from "react";
import LocationPageContent from "./LocationPageContent";

export default function LocationsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LocationPageContent />
    </Suspense>
  );
}