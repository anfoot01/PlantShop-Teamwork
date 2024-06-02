import { StarIcon } from "./icons/starIcon";

export const RatingStar = ({length, count}) => {
    function generateBooleanArray(length, count) {
        const array = [];
        for (let i = 0; i < length; i++) {
          array.push(i < count);
        }
        return array;
      }
      
      const array = generateBooleanArray(length, count);


    return(
        array.map((item, index) => {
            const className = item ? 'active-star' : 'rating-star';
            return(
                <span key={index}>
                    <StarIcon className = {className} />
                </span>
            )
        })
    )
}