import React, { useState, useEffect } from "react";
import CalenderCompo from "../../Components/CalenderCompo/CalenderCompo";
import Swal from "sweetalert2";

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [note, setNote] = useState("");
  const [events, setEvents] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Fetch events using fetch API
  const fetchEvents = async () => {
    try {
      const response = await fetch("https://dashifybackend-production.up.railway.app");
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const data = await response.json();
      setEvents(data); // Save fetched events into state
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      const data = {
        date: selectedDate.toISOString(),
        note: note,
      };

      const response = await fetch("https://dashifybackend-production.up.railway.app", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        Swal.fire({
          title: "Added Successfully!",
          text: "You clicked the button!",
          icon: "success",
        });
        setNote(""); // Clear input after save
        fetchEvents(); // Refresh events after adding
      } else {
        throw new Error("Failed to save data.");
      }
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data.");
    }
  };

  // Handle event deletion
  const handleDelete = async (eventId) => {
    try {
      // Show the SweetAlert confirmation first
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      // If the user confirms, send the DELETE request
      if (result.isConfirmed) {
        const response = await fetch(
          `https://dashifybackend-production.up.railway.app/${eventId}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          Swal.fire({
            title: "Deleted!",
            text: "Your event has been deleted.",
            icon: "success",
          });

          // Remove the deleted event from the state
          setEvents((prevEvents) =>
            prevEvents.filter(
              (event) => event.id !== eventId && event._id !== eventId
            )
          );
        } else {
          throw new Error("Failed to delete event.");
        }
      }
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("Failed to delete event.");
    }
  };

  // Fetch events when component mounts
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-base-100">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Calendar */}
        <div className="bg-white dark:bg-base-200 p-6 rounded-2xl shadow-md border border-base-300">
          <CalenderCompo
            selectedDate={selectedDate}
            onDateChange={handleDateChange}
          />
        </div>

        {/* Selected Date, Input, and Events */}
        <div className="bg-white dark:bg-base-200 p-6 rounded-2xl shadow-md border border-base-300 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Selected Date
          </h2>
          <p className="text-lg text-base-content mb-6">
            {selectedDate.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          {/* Input field */}
          <input
            type="text"
            placeholder="Enter a note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="input input-bordered w-full mb-4"
          />

          {/* Submit button */}
          <button
            onClick={handleSubmit}
            className="btn btn-primary w-full mb-8"
          >
            Add
          </button>

          {/* Events list */}
          <div className="w-full">
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Saved Events
            </h3>
            <ul className="space-y-2">
              {events.map((event) => (
                <li
                  key={event.id || event._id} // Use _id if from MongoDB
                  className="p-4 rounded-lg bg-base-200 text-base-content shadow-sm flex justify-between items-center"
                >
                  <div>
                    <div className="font-bold">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div>{event.note}</div>
                  </div>

                  {/* Delete button */}
                  <button
                    onClick={() => handleDelete(event.id || event._id)} // Pass unique ID
                    className="btn btn-error btn-sm ml-4"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
