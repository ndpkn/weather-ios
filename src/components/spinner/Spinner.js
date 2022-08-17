
import { Rings } from  'react-loader-spinner'

const Spinner = () => {
    return (
        <Rings
            height="80"
            width="80"
            color="#fff"
            radius="6"
            wrapperStyle={{}}
            wrapperClass="spinner"
            visible={true}
            ariaLabel="rings-loading"
            />
    )
}

export default Spinner