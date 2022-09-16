import React from "react";
import PropTypes from 'prop-types';

import { SectionTitle } from "constans/SectionTitle.styled";
import { Section } from "constans/Section.styled"

export default function FeedbackSection({title, children}) {
    return (
        <Section>
            <SectionTitle>{title}</SectionTitle>
           {children}
        </Section>
    )
}

FeedbackSection.propTypes = {
    title: PropTypes.string.isRequired,
  };