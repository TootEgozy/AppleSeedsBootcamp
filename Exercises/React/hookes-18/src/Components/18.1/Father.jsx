import React from 'react'
import RenderdText from './RenderdText';


const text = `The Intergovernmental Panel on Climate Change (IPCC) is the UN body for assessing the science related to climate change. It was established by the United Nations Environment Programme (UNEP) and the World Meteorological Organization (WMO) in 1988 to provide political leaders with periodic scientific assessments concerning climate change, its implications and risks, as well as to put forward adaptation and mitigation strategies. It has 195 member states. In the same year, the UN General Assembly endorsed the action by the WMO and UNEP in jointly establishing the IPCC.

Thousands of people from all over the world contribute to the work of the IPCC. For the assessment reports, IPCC scientists volunteer their time to assess the thousands of scientific papers published each year to provide a comprehensive summary of what is known about the drivers of climate change, its impacts and future risks, and how adaptation and mitigation can reduce those risks.

The IPCC has three working groups: Working Group I, dealing with the physical science basis of climate change; Working Group II, dealing with impacts, adaptation and vulnerability; and Working Group III, dealing with the mitigation of climate change. It also has a Task Force on National Greenhouse Gas Inventories that develops methodologies for measuring emissions and removals.`;

const maxLength = 52;

export default function Father() {
    return (
        <div>
           <RenderdText text={text} maxLength={maxLength}/> 
        </div>
    )
}
