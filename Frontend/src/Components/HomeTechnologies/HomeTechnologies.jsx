import React from "react";
import "./HomeTechnologies.css";

import slack from "../../Assets/slack.svg";
import clickup from "../../Assets/clickup.svg";
import dropbox from "../../Assets/dropbox.svg";
import zoom from "../../Assets/zoom.svg";
import ovh from "../../Assets/ovhcloud.svg";
import gitlab from "../../Assets/gitlab.svg";
import notion from "../../Assets/notion.svg";
import chatgpt from "../../Assets/chatgpt.svg";

const techs = [
  {
    img: chatgpt,
    title: "ChatGPT",
    desc: "Offering assistance with answering frequently asked questions.",
  },
  {
    img: notion,
    title: "Notion",
    desc: "You can create rich-text document customizable formatting, images.",
  },
  {
    img: gitlab,
    title: "Gitlab",
    desc: "Support more Multiple repositories to one or more channels.",
  },
  {
    img: ovh,
    title: "OVHcloud",
    desc: "OVH legally OVH group SAS, is a French cloud compute company.",
  },
  {
    img: clickup,
    title: "Clickup",
    desc: "ClickUp is a productivity platform for our task management.",
  },
  {
    img: slack,
    title: "Slack",
    desc: "Slack used channels to organize communication around topics.",
  },
  {
    img: zoom,
    title: "Zoom",
    desc: "For Video conferencing platform used for virtual meeting.",
  },
  {
    img: dropbox,
    title: "Dropbox",
    desc: "Dropbox provides cloud storage where users can securely store.",
  },
];

export default function Technologies() {
  return (
    <section className="tech-section">
      <p className="tech-tag">[ OUR TECHNOLOGIES ]</p>
      <h2>
        Effortless IT Integration <br /> for Business.
      </h2>

      {/* TOP ROW */}
      <div className="marquee left">
        <div className="track">
          {[...techs, ...techs].map((t, i) => (
            <Card key={`top-${i}`} {...t} />
          ))}
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="marquee right">
        <div className="track">
          {[...techs, ...techs].map((t, i) => (
            <Card key={`bottom-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ img, title, desc }) {
  return (
    <div className="tech-card">
      <img src={img} alt={title} />
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}
