import React from 'react';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const PatchHistoryElement = ({title, subtitle, blogUrl, dateString}) => (
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'var(--ifm-color-primary)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  var(--ifm-color-primary)' }}
        date={dateString}
        iconStyle={{ background: 'var(--ifm-color-primary)', color: '#fff' }}
        dateClassName='dateLabel'>
            <a href={blogUrl} target="_blank" style={{color: 'var(--ifm-color-primary-darkest)'}}>
                <h3 className="vertical-timeline-element-title">{title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
            </a>
    </VerticalTimelineElement>
  );