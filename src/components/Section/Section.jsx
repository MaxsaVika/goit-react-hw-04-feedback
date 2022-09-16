import React from "react";

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