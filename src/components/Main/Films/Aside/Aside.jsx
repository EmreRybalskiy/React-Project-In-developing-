import React from "react";

import { Input } from "../../../Input/Input.jsx";
import "./aside.css";

export const Aside = () => {
  return (
    <div className="aside">
      <Input type="text" place="Searh film" class="search-input" />
      <div className="genres">
        <h3>Genres</h3>
        <div className="genre-holder">
          <Input type="checkbox" name="Horror" />
          <label for="Horror">Horror</label>
        </div>
        <div className="genre-holder">
          <Input type="checkbox" name="Comedy" />
          <label for="Comedy">Comedy</label>
        </div>
        <div className="genre-holder">
          <Input type="checkbox" name="Action" />
          <label for="Action">Action</label>
        </div>
        <div className="genre-holder">
          <Input type="checkbox" name="Drama" />
          <label for="Drama">Drama</label>
        </div>
        <div className="genre-holder">
          <Input type="checkbox" name="Fantasy" />
          <label for="Fantasy">Fantasy</label>
        </div>
      </div>
      <div className="language">
        <h3>Language</h3>
        <div className="genre-holder">
          <Input type="checkbox" name="english" />
          <label for="english">English</label>
        </div>
        <div className="genre-holder">
          <Input type="checkbox" name="spanish" />
          <label for="spanish">Spanish</label>
        </div>
        <div className="genre-holder">
          <Input type="checkbox" name="russian" />
          <label for="russian">Russian</label>
        </div>
        <div className="genre-holder">
          <Input type="checkbox" name="french" />
          <label for="french">French</label>
        </div>
        <div className="genre-holder">
          <Input type="checkbox" name="japanese" />
          <label for="japanese">Japanese</label>
        </div>
      </div>
    </div>
  );
};
