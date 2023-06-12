import moment from "moment/moment";

const dateFormat = (date) => {
 return moment(date).format("MMMM DD, YYYY");
};

export default dateFormat;
