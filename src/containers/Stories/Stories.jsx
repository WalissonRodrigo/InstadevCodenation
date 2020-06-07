import React, { useState } from "react";

import Story from "../../components/Story";

import "./Stories.scss";

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState(false);
  const [selectedStory, setSelectedHistory] = useState({});
  const [selectedProfile, setSelectedProfile] = useState({});

  const findStoryById = (id) => stories.find((story) => story.id === id);

  const handleStory = (story) => {
    const findStory = findStoryById(story.id);
    const profile = getUserHandler(story.userId);

    setSelectedProfile(profile);
    setSelectedHistory(findStory);
    setShowStory(!showStory);
  };
  return (
    <>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories.map((story, index) => {
            const profile = getUserHandler(story.userId);

            return (
              <button
                key={story.id}
                onClick={() => handleStory(story)}
                className={`user__thumb ${
                  index === 0 && "user__thumb--hasNew"
                }`}
              >
                <div className="user__thumb__wrapper">
                  <img src={profile.avatar} alt={profile.name} />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {showStory && (
        <Story
          story={selectedStory}
          user={selectedProfile}
          handleClose={() => setShowStory(!showStory)}
        />
      )}
    </>
  );
};

export default Stories;
