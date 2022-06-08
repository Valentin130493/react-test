// Appointment - Calendar

import React, { useState } from "react";

import DatePicker from "react-datepicker";
import Popup from 'reactjs-popup';

// Components
import { Button } from "components";
import { Header } from "components/header/Header";
import { Calendar } from "components/calendar/Calendar";

import { imagesArr } from "assets";

export const CalendarAppointment: React.FC = () => {
    const [user,] = useState({
        avtar: "https://dummyimage.com/50x50",
        name: 'Esther Howard',
        email: 'estherhoward@example.com'
    });

    const [date, setDate] = useState(new Date());

    const [events,] = useState([
        { id: 1, title: 'Bone Density', start: '2022-05-30T10:30:00', end: '2022-05-30T11:30:00', },
        { id: 2, title: 'CT/CAT Scan', start: '2022-05-29T10:30:00', end: '2022-05290T11:30:00', }
    ]);

    const [appointmentDetails,] = useState({
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
    });

    const CalendarDate = ({ value, onClick }: { value: string; onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void }) => (
        <button className="mp_datepicker-input" onClick={onClick}>
            {value}
            <i><img src={imagesArr.DropdownArrow} alt="" /> </i>
        </button>
    );

    return (
        <React.Fragment>
            <div className="m_portal">

                {/* Portal Header */}
                <Header type={true} logo={<imagesArr.Logo />} user={user} />

                <div className="m_portal-layout m_calendar-layout">
                    <div className="mp_container">

                        {/* Header */}
                        <div className="mp_appointments-header">
                            <div className="mp_appointments-header-title">

                                <h3>Calendar appointments</h3>


                                <div className="mp_filter-sort">
                                    <div className="m_flex m_align-center">
                                        <p>Sort by: </p>
                                        <Popup
                                            trigger={<span className="mp_filter-sort-text">
                                                Upcoming
                                                <i><img src={imagesArr.DropdownArrow} alt="" /> </i>
                                            </span>}
                                            className="m_tooltip"
                                            position="bottom center"
                                        >
                                            <ul className="m_tooltip-menu">
                                                <li>Upcoming</li>
                                                <li>Previous</li>
                                            </ul>
                                        </Popup>
                                    </div>
                                </div>

                            </div>
                            <div className="mp_appointments-header-buttons">
                                <div className="mp_datepicker">
                                    <DatePicker
                                        selected={date}
                                        onChange={(date) => setDate(date)}
                                        dateFormat="MMMM, yyyy"
                                        showMonthYearPicker
                                        showFullMonthYearPicker
                                        customInput={React.createElement(CalendarDate)}
                                    />
                                </div>
                                <Button variant="icon" label="New Schedule" icon={<imagesArr.Plus />} />
                            </div>

                        </div>

                        {/* Calendar */}
                        <div className="mp_appointments-body">
                            <Calendar events={events} date={date} dayHeaderFormat="long" dayHeaders={true} appointmentDetails={appointmentDetails} contentHeight={765} button={false} dropdown={false} />
                        </div>

                    </div>
                </div>
            </div>

        </React.Fragment>
    );
};
