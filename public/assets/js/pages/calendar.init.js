var start_date = document.getElementById("event-start-date"),
    timepicker1 = document.getElementById("timepicker1"),
    timepicker2 = document.getElementById("timepicker2"),
    date_range = null,
    T_check = null;
function flatPickrInit() {
    var e = { enableTime: !0, noCalendar: !0 };
    flatpickr(start_date, {
        enableTime: !1,
        mode: "range",
        minDate: "today",
        onChange: function (e, t, n) {
            1 < t.split("to").length
                ? document
                      .getElementById("event-time")
                      .setAttribute("hidden", !0)
                : (document
                      .getElementById("timepicker1")
                      .parentNode.classList.remove("d-none"),
                  document
                      .getElementById("timepicker1")
                      .classList.replace("d-none", "d-block"),
                  document
                      .getElementById("timepicker2")
                      .parentNode.classList.remove("d-none"),
                  document
                      .getElementById("timepicker2")
                      .classList.replace("d-none", "d-block"),
                  document
                      .getElementById("event-time")
                      .removeAttribute("hidden"));
        },
    });
    flatpickr(timepicker1, e), flatpickr(timepicker2, e);
}
function flatpicekrValueClear() {
    start_date.flatpickr().clear(),
        timepicker1.flatpickr().clear(),
        timepicker2.flatpickr().clear();
}
function eventClicked() {
    document.getElementById("form-event").classList.add("view-event"),
        document
            .getElementById("event-title")
            .classList.replace("d-block", "d-none"),
        document
            .getElementById("event-category")
            .classList.replace("d-block", "d-none"),
        document
            .getElementById("event-start-date")
            .parentNode.classList.add("d-none"),
        document
            .getElementById("event-start-date")
            .classList.replace("d-block", "d-none"),
        document.getElementById("event-time").setAttribute("hidden", !0),
        document
            .getElementById("timepicker1")
            .parentNode.classList.add("d-none"),
        document
            .getElementById("timepicker1")
            .classList.replace("d-block", "d-none"),
        document
            .getElementById("timepicker2")
            .parentNode.classList.add("d-none"),
        document
            .getElementById("timepicker2")
            .classList.replace("d-block", "d-none"),
        document
            .getElementById("event-location")
            .classList.replace("d-block", "d-none"),
        document
            .getElementById("event-description")
            .classList.replace("d-block", "d-none"),
        document
            .getElementById("event-start-date-tag")
            .classList.replace("d-none", "d-block"),
        document
            .getElementById("event-timepicker1-tag")
            .classList.replace("d-none", "d-block"),
        document
            .getElementById("event-timepicker2-tag")
            .classList.replace("d-none", "d-block"),
        document
            .getElementById("event-location-tag")
            .classList.replace("d-none", "d-block"),
        document
            .getElementById("event-description-tag")
            .classList.replace("d-none", "d-block"),
        document.getElementById("btn-save-event").setAttribute("hidden", !0);
}
function editEvent(e) {
    var t = e.getAttribute("data-id");
    "new-event" == t
        ? ((document.getElementById("modal-title").innerHTML = ""),
          (document.getElementById("modal-title").innerHTML = "Add Event"),
          (document.getElementById("btn-save-event").innerHTML = "Add Event"),
          eventTyped())
        : "edit-event" == t
        ? ((e.innerHTML = "Cancel"),
          e.setAttribute("data-id", "cancel-event"),
          (document.getElementById("btn-save-event").innerHTML =
              "Update Event"),
          e.removeAttribute("hidden"),
          eventTyped())
        : ((e.innerHTML = "Edit"),
          e.setAttribute("data-id", "edit-event"),
          eventClicked());
}
function eventTyped() {
    document.getElementById("form-event").classList.remove("view-event"),
        document
            .getElementById("event-title")
            .classList.replace("d-none", "d-block"),
        document
            .getElementById("event-category")
            .classList.replace("d-none", "d-block"),
        document
            .getElementById("event-start-date")
            .parentNode.classList.remove("d-none"),
        document
            .getElementById("event-start-date")
            .classList.replace("d-none", "d-block"),
        document
            .getElementById("timepicker1")
            .parentNode.classList.remove("d-none"),
        document
            .getElementById("timepicker1")
            .classList.replace("d-none", "d-block"),
        document
            .getElementById("timepicker2")
            .parentNode.classList.remove("d-none"),
        document
            .getElementById("timepicker2")
            .classList.replace("d-none", "d-block"),
        document
            .getElementById("event-location")
            .classList.replace("d-none", "d-block"),
        document
            .getElementById("event-description")
            .classList.replace("d-none", "d-block"),
        document
            .getElementById("event-start-date-tag")
            .classList.replace("d-block", "d-none"),
        document
            .getElementById("event-timepicker1-tag")
            .classList.replace("d-block", "d-none"),
        document
            .getElementById("event-timepicker2-tag")
            .classList.replace("d-block", "d-none"),
        document
            .getElementById("event-location-tag")
            .classList.replace("d-block", "d-none"),
        document
            .getElementById("event-description-tag")
            .classList.replace("d-block", "d-none"),
        document.getElementById("btn-save-event").removeAttribute("hidden");
}
function upcomingEvent(e) {
    e.sort(function (e, t) {
        return new Date(e.start) - new Date(t.start);
    }),
        (document.getElementById("upcoming-event-list").innerHTML = null),
        Array.from(e).forEach(function (e) {
            var t = e.title,
                n =
                    "Invalid Date" == (n = e.end || null) || null == n
                        ? null
                        : new Date(n).toLocaleDateString("en", {
                              year: "numeric",
                              month: "numeric",
                              day: "numeric",
                          });
            str_dt(e.start) === str_dt(e.end) && (n = null);
            var a =
                    "Invalid Date" === (a = e.start) || void 0 === a
                        ? null
                        : new Date(a).toLocaleDateString("en", {
                              year: "numeric",
                              month: "numeric",
                              day: "numeric",
                          }),
                d = n ? " to " + n : "",
                i = e.className.split("-"),
                l = e.description || "",
                n = tConvert(getTime(e.start));
            n == (e = tConvert(getTime(e.end))) &&
                ((n = "Full day event"), (e = null));
            e = e ? " to " + e : "";
            (u_event =
                "<div class='card mb-3'>                        <div class='card-body'>                            <div class='d-flex mb-3'>                                <div class='flex-grow-1'><i class='mdi mdi-checkbox-blank-circle me-2 text-" +
                i[2] +
                "'></i><span class='fw-medium'>" +
                a +
                d +
                " </span></div>                                <div class='flex-shrink-0'><small class='badge badge-soft-primary ms-auto'>" +
                n +
                e +
                "</small></div>                            </div>                            <h6 class='card-title fs-16'> " +
                t +
                "</h6>                            <p class='text-muted text-truncate-two-lines mb-0'> " +
                l +
                "</p>                        </div>                    </div>"),
                (document.getElementById("upcoming-event-list").innerHTML +=
                    u_event);
        });
}
function getTime(e) {
    if (null != (e = new Date(e)).getHours())
        return e.getHours() + ":" + (e.getMinutes() ? e.getMinutes() : 0);
}
function tConvert(e) {
    var t = e.split(":"),
        n = t[0],
        e = t[1],
        t = 12 <= n ? "PM" : "AM";
    return (n = (n %= 12) || 12) + ":" + (e = e < 10 ? "0" + e : e) + " " + t;
}
document.addEventListener("DOMContentLoaded", function () {
    flatPickrInit();
    var g = new bootstrap.Modal(document.getElementById("event-modal"), {
        keyboard: !1,
    });
    document.getElementById("event-modal");
    var d = document.getElementById("modal-title"),
        i = document.getElementById("form-event"),
        v = null,
        p = document.getElementsByClassName("needs-validation"),
        e = new Date(),
        t = e.getDate(),
        n = e.getMonth(),
        a = e.getFullYear(),
        l = FullCalendar.Draggable,
        e = document.getElementById("external-events"),
        y = [
            {
                id: 1,
                title: "World Braille Day",
                start: "2022-01-04",
                className: "bg-soft-info",
                allDay: !0,
            },
            {
                id: 2,
                title: "World Leprosy Day",
                start: "2022-01-30",
                className: "bg-soft-info",
                allDay: !0,
            },
            {
                id: 3,
                title: "International Mother Language Day",
                start: "2022-02-21",
                className: "bg-soft-info",
                allDay: !0,
            },
            {
                id: 4,
                title: "International Women's Day",
                start: "2022-03-08",
                className: "bg-soft-info",
                allDay: !0,
            },
            {
                id: 5,
                title: "World Thinking Day",
                start: "2022-02-22",
                className: "bg-soft-info",
                allDay: !0,
            },
            {
                id: 6,
                title: "International Mother Language Day",
                start: "2022-03-21",
                className: "bg-soft-info",
                allDay: !0,
            },
            {
                id: 7,
                title: "World Water Day",
                start: "2022-03-22",
                className: "bg-soft-info",
                allDay: !0,
            },
            {
                id: 8,
                title: "World Health Day",
                start: "2022-04-07",
                className: "bg-soft-info",
                allDay: !0,
            },
            {
                id: 9,
                title: "International Special Librarians Day",
                start: "2022-04-16",
                className: "bg-soft-info",
                allDay: !0,
            },
            {
                id: 10,
                title: "Earth Day",
                start: "2022-04-22",
                className: "bg-soft-info",
                allDay: !0,
            },
            {
                id: 153,
                title: "All Day Event",
                start: new Date(a, n, 1),
                className: "bg-soft-primary",
                location: "San Francisco, US",
                allDay: !0,
                extendedProps: { department: "All Day Event" },
                description:
                    "An all-day event is an event that lasts an entire day or longer",
            },
            {
                id: 136,
                title: "Visit Online Course",
                start: new Date(a, n, t - 5),
                end: new Date(a, n, t - 2),
                allDay: !0,
                className: "bg-soft-warning",
                extendedProps: { department: "Long Event" },
                description:
                    "Long Term Event means an incident that last longer than 12 hours.",
            },
            {
                id: 999,
                title: "Client Meeting with Alexis",
                start: new Date(a, n, t + 22, 20, 0),
                end: new Date(a, n, t + 24, 16, 0),
                allDay: !0,
                className: "bg-soft-danger",
                location: "California, US",
                extendedProps: { department: "Meeting with Alexis" },
                description:
                    "A meeting is a gathering of two or more people that has been convened for the purpose of achieving a common goal through verbal interaction, such as sharing information or reaching agreement.",
            },
            {
                id: 991,
                title: "Repeating Event",
                start: new Date(a, n, t + 4, 16, 0),
                end: new Date(a, n, t + 9, 16, 0),
                allDay: !0,
                className: "bg-soft-primary",
                location: "Las Vegas, US",
                extendedProps: { department: "Repeating Event" },
                description:
                    "A recurring or repeating event is simply any event that you will occur more than once on your calendar. ",
            },
            {
                id: 112,
                title: "Meeting With Designer",
                start: new Date(a, n, t, 12, 30),
                allDay: !0,
                className: "bg-soft-success",
                location: "Head Office, US",
                extendedProps: { department: "Meeting" },
                description: "Tell how to boost website traffic",
            },
            {
                id: 113,
                title: "Weekly Strategy Planning",
                start: new Date(a, n, t + 9),
                end: new Date(a, n, t + 11),
                allDay: !0,
                className: "bg-soft-danger",
                location: "Head Office, US",
                extendedProps: { department: "Lunch" },
                description: "Strategies for Creating Your Weekly Schedule",
            },
            {
                id: 875,
                title: "Birthday Party",
                start: new Date(a, n, t + 1, 19, 0),
                allDay: !0,
                className: "bg-soft-success",
                location: "Los Angeles, US",
                extendedProps: { department: "Birthday Party" },
                description:
                    "Family slumber party – Bring out the blankets and pillows and have a family slumber party! Play silly party games, share special snacks and wind down the fun with a special movie.",
            },
            {
                id: 783,
                title: "Click for Google",
                start: new Date(a, n, 28),
                end: new Date(a, n, 29),
                allDay: !0,
                url: "http://google.com/",
                className: "bg-soft-dark",
            },
            {
                id: 456,
                title: "Velzon Project Discussion with Team",
                start: new Date(a, n, t + 23, 20, 0),
                end: new Date(a, n, t + 24, 16, 0),
                allDay: !0,
                className: "bg-soft-info",
                location: "Head Office, US",
                extendedProps: { department: "Discussion" },
                description: "Tell how to boost website traffic",
            },
        ];
    new l(e, {
        itemSelector: ".external-event",
        eventData: function (e) {
            return {
                title: e.innerText,
                start: new Date(),
                className: e.getAttribute("data-class"),
            };
        },
    });
    e = document.getElementById("calendar");
    function o(e) {
        document.getElementById("form-event").reset(),
            document
                .getElementById("btn-delete-event")
                .setAttribute("hidden", !0),
            g.show(),
            i.classList.remove("was-validated"),
            i.reset(),
            (v = null),
            (d.innerText = "Add Event"),
            (newEventData = e),
            document
                .getElementById("edit-event-btn")
                .setAttribute("data-id", "new-event"),
            document.getElementById("edit-event-btn").click(),
            document
                .getElementById("edit-event-btn")
                .setAttribute("hidden", !0);
    }
    function r() {
        return 768 <= window.innerWidth && window.innerWidth < 1200
            ? "timeGridWeek"
            : window.innerWidth <= 768
            ? "listMonth"
            : "dayGridMonth";
    }
    var c = new Choices("#event-category", { searchEnabled: !1 }),
        E = new FullCalendar.Calendar(e, {
            timeZone: "local",
            editable: !0,
            droppable: !0,
            selectable: !0,
            navLinks: !0,
            initialView: r(),
            themeSystem: "bootstrap",
            headerToolbar: {
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            },
            windowResize: function (e) {
                var t = r();
                E.changeView(t);
            },
            eventClick: function (e) {
                document
                    .getElementById("edit-event-btn")
                    .removeAttribute("hidden"),
                    document
                        .getElementById("btn-save-event")
                        .setAttribute("hidden", !0),
                    document
                        .getElementById("edit-event-btn")
                        .setAttribute("data-id", "edit-event"),
                    (document.getElementById("edit-event-btn").innerHTML =
                        "Edit"),
                    eventClicked(),
                    flatPickrInit(),
                    flatpicekrValueClear(),
                    g.show(),
                    i.reset(),
                    (v = e.event),
                    (document.getElementById("modal-title").innerHTML = ""),
                    (document.getElementById("event-location-tag").innerHTML =
                        void 0 === v.extendedProps.location
                            ? "No Location"
                            : v.extendedProps.location),
                    (document.getElementById(
                        "event-description-tag"
                    ).innerHTML =
                        void 0 === v.extendedProps.description
                            ? "No Description"
                            : v.extendedProps.description),
                    (document.getElementById("event-title").value = v.title),
                    (document.getElementById("event-location").value =
                        void 0 === v.extendedProps.location
                            ? "No Location"
                            : v.extendedProps.location),
                    (document.getElementById("event-description").value =
                        void 0 === v.extendedProps.description
                            ? "No Description"
                            : v.extendedProps.description),
                    (document.getElementById("eventid").value = v.id),
                    v.classNames[0] &&
                        (c.destroy(),
                        (c = new Choices("#event-category", {
                            searchEnabled: !1,
                        })).setChoiceByValue(v.classNames[0]));
                function t(e) {
                    var t = new Date(e),
                        n = "" + (t.getMonth() + 1),
                        e = "" + t.getDate();
                    return [
                        t.getFullYear(),
                        (n = n.length < 2 ? "0" + n : n),
                        (e = e.length < 2 ? "0" + e : e),
                    ].join("-");
                }
                var n = v.start,
                    a = v.end,
                    e = null == a ? str_dt(n) : str_dt(n) + " to " + str_dt(a),
                    a = null == a ? t(n) : t(n) + " to " + t(a);
                flatpickr(start_date, {
                    defaultDate: a,
                    altInput: !0,
                    altFormat: "j F Y",
                    dateFormat: "Y-m-d",
                    mode: "range",
                    onChange: function (e, t, n) {
                        1 < t.split("to").length
                            ? document
                                  .getElementById("event-time")
                                  .setAttribute("hidden", !0)
                            : (document
                                  .getElementById("timepicker1")
                                  .parentNode.classList.remove("d-none"),
                              document
                                  .getElementById("timepicker1")
                                  .classList.replace("d-none", "d-block"),
                              document
                                  .getElementById("timepicker2")
                                  .parentNode.classList.remove("d-none"),
                              document
                                  .getElementById("timepicker2")
                                  .classList.replace("d-none", "d-block"),
                              document
                                  .getElementById("event-time")
                                  .removeAttribute("hidden"));
                    },
                }),
                    (document.getElementById("event-start-date-tag").innerHTML =
                        e);
                (a = getTime(v.start)), (e = getTime(v.end));
                a == e
                    ? (document
                          .getElementById("event-time")
                          .setAttribute("hidden", !0),
                      flatpickr(document.getElementById("timepicker1"), {
                          enableTime: !0,
                          noCalendar: !0,
                          dateFormat: "H:i",
                      }),
                      flatpickr(document.getElementById("timepicker2"), {
                          enableTime: !0,
                          noCalendar: !0,
                          dateFormat: "H:i",
                      }))
                    : (document
                          .getElementById("event-time")
                          .removeAttribute("hidden"),
                      flatpickr(document.getElementById("timepicker1"), {
                          enableTime: !0,
                          noCalendar: !0,
                          dateFormat: "H:i",
                          defaultDate: a,
                      }),
                      flatpickr(document.getElementById("timepicker2"), {
                          enableTime: !0,
                          noCalendar: !0,
                          dateFormat: "H:i",
                          defaultDate: e,
                      }),
                      (document.getElementById(
                          "event-timepicker1-tag"
                      ).innerHTML = tConvert(a)),
                      (document.getElementById(
                          "event-timepicker2-tag"
                      ).innerHTML = tConvert(e))),
                    (newEventData = null),
                    (d.innerText = v.title),
                    document
                        .getElementById("btn-delete-event")
                        .removeAttribute("hidden");
            },
            dateClick: function (e) {
                o(e);
            },
            events: y,
            eventReceive: function (e) {
                e = {
                    id: Math.floor(11e3 * Math.random()),
                    title: e.event.title,
                    start: e.event.start,
                    allDay: e.event.allDay,
                    className: e.event.classNames[0],
                };
                y.push(e), upcomingEvent(y);
            },
            eventDrop: function (t) {
                var e = y.findIndex(function (e) {
                    return e.id == t.event.id;
                });
                y[e] &&
                    ((y[e].title = t.event.title),
                    (y[e].start = t.event.start),
                    (y[e].end = t.event.end || null),
                    (y[e].allDay = t.event.allDay),
                    (y[e].className = t.event.classNames[0]),
                    (y[e].description =
                        t.event._def.extendedProps.description || ""),
                    (y[e].location =
                        t.event._def.extendedProps.location || "")),
                    upcomingEvent(y);
            },
        });
    E.render(),
        upcomingEvent(y),
        i.addEventListener("submit", function (e) {
            e.preventDefault();
            var t,
                n = document.getElementById("event-title").value,
                a = document.getElementById("event-category").value,
                d = document
                    .getElementById("event-start-date")
                    .value.split("to"),
                i = new Date(d[0].trim()),
                l = d[1] ? new Date(d[1].trim()) : "",
                o = null,
                r = document.getElementById("event-location").value,
                c = document.getElementById("event-description").value,
                s = document.getElementById("eventid").value,
                m = !1;
            1 < d.length
                ? ((o = new Date(d[1])).setDate(o.getDate() + 1),
                  (d = new Date(d[0])),
                  (m = !0))
                : ((t = d),
                  (e = document.getElementById("timepicker1").value.trim()),
                  (u = document.getElementById("timepicker2").value.trim()),
                  (d = new Date(d + "T" + e)),
                  (o = new Date(t + "T" + u)));
            var u = y.length + 1;
            !1 === p[0].checkValidity()
                ? p[0].classList.add("was-validated")
                : (v
                      ? (v.setProp("id", s),
                        v.setProp("title", n),
                        v.setProp("classNames", [a]),
                        v.setStart(i),
                        v.setEnd(l),
                        v.setAllDay(m),
                        v.setExtendedProp("description", c),
                        v.setExtendedProp("location", r),
                        (s = y.findIndex(function (e) {
                            return e.id == v.id;
                        })),
                        y[s] &&
                            ((y[s].title = n),
                            (y[s].start = i),
                            (y[s].end = l),
                            (y[s].allDay = m),
                            (y[s].className = a),
                            (y[s].description = c),
                            (y[s].location = r)),
                        E.render())
                      : (E.addEvent(
                            (r = {
                                id: u,
                                title: n,
                                start: d,
                                end: o,
                                allDay: m,
                                className: a,
                                description: c,
                                location: r,
                            })
                        ),
                        y.push(r)),
                  g.hide(),
                  upcomingEvent(y));
        }),
        document
            .getElementById("btn-delete-event")
            .addEventListener("click", function (e) {
                if (v) {
                    for (var t = 0; t < y.length; t++)
                        y[t].id == v.id && (y.splice(t, 1), t--);
                    upcomingEvent(y), v.remove(), (v = null), g.hide();
                }
            }),
        document
            .getElementById("btn-new-event")
            .addEventListener("click", function (e) {
                flatpicekrValueClear(),
                    flatPickrInit(),
                    o(),
                    document
                        .getElementById("edit-event-btn")
                        .setAttribute("data-id", "new-event"),
                    document.getElementById("edit-event-btn").click(),
                    document
                        .getElementById("edit-event-btn")
                        .setAttribute("hidden", !0);
            });
});
var str_dt = function (e) {
    var t = new Date(e),
        n =
            "" +
            [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ][t.getMonth()],
        e = "" + t.getDate(),
        t = t.getFullYear();
    return (
        n.length < 2 && (n = "0" + n),
        [(e = e.length < 2 ? "0" + e : e) + " " + n, t].join(",")
    );
};
