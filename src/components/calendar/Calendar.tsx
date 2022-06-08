import './calendar.scss';

import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useEffect, useRef, useState } from 'react';
import moment from "moment";
import DatePicker from "react-datepicker";

import { Button } from "components";
import { imagesArr } from 'assets';
interface CalendarProps {
	/**
	 * Events details
	 */
	events?: any;
	/**
	 * You can set initialDate
	 */
	date?: Date;
	/**
	 * You can set formate of day header
	 */
	dayHeaderFormat?: 'long' | 'narrow' | 'short';
	/**
	 * You can set content height
	 */
	contentHeight?: any,
	/**
	 * Hide show weekends column
	 */
	weekends?: boolean,
	/**
	 * Pass object of appointment popup details
	 */
	appointmentDetails?: any,
	/**
	 * Hide show header of day
	 */
	dayHeaders?: boolean,
	/**
	 * Hide show button
	 */
	button?: boolean,
	/**
	 * Hide show date dropdown
	 */
	dropdown?: boolean
	/**
	   * Set selected date value using hooks
	   */
	getSelectdDate?: (d) => any,
}

/**
 * Primary UI component for user interaction
*/

export const Calendar = (props: CalendarProps) => {

	const { events, date, dayHeaderFormat, contentHeight, weekends, appointmentDetails, dayHeaders, button, dropdown, getSelectdDate } = props;

	const calendarComponentRef = useRef(null);

	const [open, setOpen] = useState(false);

	useEffect(() => {
		console.log("getSelectdDate:--", date);
		let calendarApi = calendarComponentRef.current.getApi();
		calendarApi.gotoDate(date);
	}, [date]);

	const renderEventContent = (eventInfo) => {
		return (
			<div className="mp_appointments-calendar-event">
				<h4>{eventInfo.event.title}</h4>
				<p>{moment(eventInfo.event.start).format("hh:mm")}-{moment(eventInfo.event.end).format("hh:mm")}</p>
			</div>
		)
	}

	const getEventDetails = (event) => {
		setOpen(!open);
	}

	const viewFile = (path) => {
		window.open(path, '_blank')
	}

	const CalendarDate = ({ value, onClick }: { value: string; onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void }) => (
		<button className="mp_datepicker-input" onClick={onClick}>
			{value}
			<i><img src={imagesArr.DropdownArrow} alt="" /> </i>
		</button>
	);

	return (
		<>
			{
				(button || dropdown) &&
				<div className="mp_appointments-header">
					<div className="mp_appointments-header-title">
					</div>
					<div className="mp_appointments-header-buttons">
						{
							dropdown &&
							<div className="mp_datepicker">
								<DatePicker
									selected={date}
									onChange={(date) => getSelectdDate(date)}
									dateFormat="MMMM, yyyy"
									showMonthYearPicker
									showFullMonthYearPicker
									customInput={React.createElement(CalendarDate)}
								/>
							</div>
						}
						{
							button &&
							<Button variant="icon" label="New Schedule" icon={<imagesArr.Plus />} />
						}
					</div>
				</div>
			}
			<FullCalendar
				plugins={[dayGridPlugin]}
				initialView="dayGridMonth"
				headerToolbar={false}
				dayHeaderFormat={{ weekday: dayHeaderFormat }}
				events={events}
				viewClassNames="mp_appointments-calendar"
				eventContent={renderEventContent}
				contentHeight={contentHeight}
				eventClick={(event) => getEventDetails(event)}
				initialDate={date}
				weekends={weekends}
				dayHeaders={dayHeaders}
				ref={calendarComponentRef}
			/>

			{
				open &&
				<div className="modal right">
					<div className="modal-overlay"></div>
					<div className="modal-content mp_app-details-modal" style={{ maxWidth: '390px' }}>
						<div className="modal-close" onClick={() => setOpen(!open)}>
							<span>&#10006;</span>
						</div>

						<div className="modal-body">

							<div className="mp_app-details-user mp_app-details">
								<h2>Details</h2>
								<h4>{appointmentDetails.name}</h4>
								<span>{appointmentDetails.address}</span>
							</div>

							<div className="mp_app-details-info mp_app-details">
								<div className="m_portal-widget-title">
									<h4> Appointment Info </h4>
								</div>

								<div className="mp_app-info-wpr mp_app-details">
									{
										appointmentDetails.information.map((item) => {
											return (
												<div className="mp_app-info">
													<img src={item.image} alt="9:00-9:50 AM, May 14, 2022" title="9:00-9:50 AM, May 14, 2022" />
													<p>{item.name}</p>
												</div>
											)
										})
									}
								</div>
							</div>

							<div className="mp_app-details-docs mp_app-details">
								<div className="m_portal-widget-title">
									<h4> Attached Documents </h4>
								</div>
								{
									appointmentDetails.docs.map((item) => {
										return (
											<>
												<div className="mp_file-report">

													<div className="mp_file-report-info">
														<div className="mp_file-report-icon">
															<img src={item.icon} alt="" />
														</div>
														<div className="mp_file-report-name">
															<p className="m_one-line">{item.name}</p>
															<span>{item.size}</span>
														</div>
													</div>

													<div className="mp_file-report-view">
														<span onClick={() => viewFile(item.path)}> View </span>
													</div>
												</div>
											</>
										)
									})
								}
							</div>

							<div className="mp_app-details-notes mp_app-details">
								<div className="m_portal-widget-title">
									<h4> Patient Notes </h4>
								</div>

								<div className="mp_app-details-note">
									<p>{appointmentDetails.notes}</p>
								</div>
							</div>
						</div>

						<div className="modal-buttons m_flex m_align-center">
							<Button label="Reschedule" variant="primary" size="small" icon="" cn="w-full mr-8" />
							<Button label="Decline" variant="gray" size="small" icon="" cn="w-full" />
						</div>
					</div>
				</div>
			}
		</>
	)
}


