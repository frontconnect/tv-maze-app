import React, { useEffect, useState } from 'react';
import SeasonTable from '../seasonTable/seasonTable';
import PropTypes from 'prop-types';
import Button from '../../atoms/button/button';

import './season.css';

export default function Season({seasonsByEpisodes}) {
  const [season, setSeason] = useState(0);

  useEffect(() => {
    setSeason(Object.keys(seasonsByEpisodes).length);
  }, [seasonsByEpisodes]);

  const onClick = (currentSeason) => {
    setSeason(+currentSeason);
  };

  return (
    <section className="season">
      <h2>Seasons</h2>
      <div className="button-group">
        {Object.keys(seasonsByEpisodes).map((seasonNumber) => (
          <Button className={'cta-link ' + (Number(seasonNumber) === season ? 'active' : '')}
            key={seasonNumber}
            onClick={() => onClick(seasonNumber)}
          >
            {`S${seasonNumber}`}
          </Button>
        ))}
      </div>
      {seasonsByEpisodes[season] && seasonsByEpisodes[season].length > 0
        ? <SeasonTable episodes={seasonsByEpisodes[season]}/>
        : ''
      }
    </section>
  );
}

Season.propTypes = {
  seasonsByEpisodes: PropTypes.object,
};
