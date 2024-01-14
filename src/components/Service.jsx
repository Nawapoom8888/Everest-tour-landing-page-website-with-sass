import React from "react";
import ServiceBox from "./ServiceBox";

export default function Service() {
  return (
    <div className="service-section border-test">
      <div className="container utils-center-content">
        <div className="title--main-white utils-margin-bottom-9-rem">
          Our Activities
        </div>
        <div className="service__box-list border-test">
          <ServiceBox
            img={"service-box-01.avif"}
            title={"Base Camp Trek"}
            info={
              "Explore the Himalayas in 12 days, trekking to Everest Base Camp. Witness iconic landscapes and Sherpa culture on this moderate adventure."
            }
          />
          <ServiceBox
            img={"service-box-02.avif"}
            title={"Summit Expedition"}
            info={
              "Conquer Everest in 60 days with experienced guides, navigating challenging terrain like the Lhotse Face and Hillary Step to stand atop the world's highest peak."
            }
          />
          <ServiceBox
            img={"service-box-03.avif"}
            title={"Helicopter Tour"}
            info={
              "Elevate your experience with a 3-hour helicopter tour, offering stunning aerial views of Everest, Lhotse, and Nuptse for a thrilling adventure without the trek"
            }
          />
        </div>
      </div>
    </div>
  );
}
/*
Everest Base Camp Trek:
Immerse yourself in the breathtaking beauty of the Himalayas with our 12-day trek to Everest Base Camp. Traverse iconic landscapes, experience Sherpa culture, and witness the awe-inspiring Khumbu Icefall on this moderate difficulty adventure.

Everest Summit Expedition:
Conquer the pinnacle of mountaineering challenges with our 60-day Everest Summit Expedition. Guided by experienced mountaineers, navigate the challenging terrain, including the Lhotse Face and Hillary Step, and stand atop the world's highest peak.

Helicopter Tour of Everest:
Short on time? Elevate your experience with our 3-hour helicopter tour, offering panoramic views of Everest, Lhotse, and Nuptse. Ideal for those seeking a thrilling aerial perspective without the physical demands of trekking or climbing.
*/
