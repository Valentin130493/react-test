import { ComponentStory } from '@storybook/react';

import { useEffect, useState } from 'react';
import { Calendar } from './Calendar';
import { imagesArr } from "assets";

export default {
  title: 'DATETIME/Calendar',
  component: Calendar,
  argTypes: {
    date: { control: 'date' },
    contentHeight: { control: 'number' },
    getSelectdDate: {
      table: {
        disable: true,
      },
    },
  }
}

const Template: ComponentStory<typeof Calendar> = (args) => {

  const [date, setDate] = useState(new Date(args.date));
  useEffect(() => {
    setDate(new Date(args.date))
  }, [args.date]);

  return <Calendar {...args} getSelectdDate={setDate} date={date} />;
};;



export const Primary = Template.bind({});

Primary.args = {
  events: [
    { id: 1, title: 'Bone Density', start: '2022-06-01T10:30:00', end: '2022-06-01T11:30:00', },
    { id: 2, title: 'CT/CAT Scan', start: '2022-06-03T10:30:00', end: '2022-06-03T11:30:00', }
  ],
  contentHeight: 765,
  date: new Date(),
  appointmentDetails: {
    name: "The Johns Hopkins Hospital",
    address: "1800 Orleans St, Baltimore, MD 21287",
    information: [
      {
        image: "https://dummyimage.com/40x40",
        name: "9:00-9:50 AM, May 14, 2022"
      }, {
        image: "https://dummyimage.com/40x40",
        name: "Bone Density/DEXA"
      }
    ],
    docs: [
      {
        icon: imagesArr.PDF,
        type: "pdf",
        name: "Medical Check Up Report.pdf",
        size: "2 Mb",
        path: 'http://www.africau.edu/images/default/sample.pdf'
      }, {
        icon: imagesArr.DOCS,
        type: "docs",
        name: "Blood Count Report.docs",
        size: "2 Mb",
        path: 'http://www.africau.edu/images/default/sample.pdf'
      }
    ],
    notes: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in."
  },
  dayHeaderFormat: "long",
  button: true,
  dropdown: true
};

