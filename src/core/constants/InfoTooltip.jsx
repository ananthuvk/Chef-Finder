import React from 'react';
import { Tooltip } from 'react-tooltip';

/**
 * Reusable InfoTooltip component
 * @param {string} id - Unique ID for the tooltip (required)
 * @param {string} content - Tooltip content/text to display
 * @param {string} place - Tooltip position: 'top', 'bottom', 'left', 'right' (default: 'right')
 * @param {boolean} multiline - Enable multiline content (default: true)
 * @param {string} className - Additional CSS classes for the icon
 */
function InfoTooltip({ id, content, place = 'right', multiline = true, className = '' }) {
  if (!id || !content) {
    return null;
  }

  return (
    <>
      <span
        className={`tooltip-icon ${className}`}
        data-tooltip-id={id}
        data-tooltip-content={content}
      >
        ?
      </span>
      <Tooltip id={id} place={place} multiline={multiline} />
    </>
  );
}

export default InfoTooltip;
