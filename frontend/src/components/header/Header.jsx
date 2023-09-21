import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";







//Header

export const Header = ({ type }) => {

  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(SearchContext);


  const [openDate, setOpenDate] = useState(false); //calendar open close
  const [destination, setDestination] = useState("");  //where are you going

  const [dates, setDates] = useState([   //calendar data
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);  //open options adults,children,room
  const [options, setOptions] = useState({                //option
    adults: 1,
    children: 0,
    room: 1,
  });

  const navigate=useNavigate()


  //cantidad de adults,children and room SELECCION
  const handleOption = (name, operation) => {
    setOptions(() => {
      return {
        ...options,
        [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
        /*no input por tanto no [e.target.name] */
      };
    });
  };




  

  //BOTON DEL FORM ENVIA LAS ENTRADAS
  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };









  return (




    <div className="header">


      <div className={type === "list" ?"headerContainer listModel" :"headerContainer"}>
        
        {/*icons */}
        <div className="headerList">

          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
          </div>
        </div> {/*icons */}


        

        {type !== "list" && (
          <>




            <h1 className="headerTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </h1>
            <p className="headerDesc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus laborum cumque iste? Sint blan
            </p>
            <button className="headerBtn">Sign in /Register</button>





            {/*header Search */}


            <div className="headerSearch">



              {/* 1.   Where are you going */}
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going"
                  className="headerSearchInput"
                  onChange={e=>setDestination(e.target.value)}
                />
              </div> {/*Where are you going */}


              {/* 2. Calendar */}
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />

                <span className="headerSearchText"
                  onClick={() => {
                    setOpenDate(!openDate);
                  }}
                >
                  {`${format(date[0].startDate, "MM/dd/yyyy")} to
                 ${format(date[0].endDate, "MM/dd/yyyy")}`}

                </span>


                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div> {/*Calendar */}



               {/* 3. NUMBER PERSON,CHILDREN AND ROOM */}
              <div className="headerSearchItem">
                
                {/* paabrir option */}
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => setOpenOptions(!openOptions)}
                >
                  {` ${options.adults} adults ${options.children} children ${options.room} room`}
                </span>


               {/*option abierto */}

                {openOptions && (
                  <div className="options"> 

                    {/*ADULT */}
                    <div className="optionItem"> 
                      <span className="optionText">Adult</span>

                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() => {
                            handleOption("adults", "dec");
                          }}
                          disabled={options.adults <= 1}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adults}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => {
                            handleOption("adults", "inc");
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>


                    {/*CHILDREN */}
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "dec")}
                          disabled={options.children <= 0}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "inc")}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/*ROOM */}
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() => {
                            handleOption("room", "dec");
                          }}
                          disabled={options.room <= 1}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => {
                            handleOption("room", "inc");
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>

                  </div>
                )}

              </div> {/*NUMBER PERSON,CHILDREN AND ROOM */}



              {/* 4. Button Search */}
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>Search</button>
              </div>{/*Button Search */}



            </div>
          </>
        )}
      </div>
    </div>
  );
};
