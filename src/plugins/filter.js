import numeral from 'numeral'

import moment from 'moment';


const timeStamp = (value) => {
    if (value) {
        return moment(String(value)).format('DD MMM YYYY hh:mm A')
    }
}

const nairaFilter = (value) => {
    if (!value) {
        return '₦ 0'
    }

    return numeral(value).format('(₦ 0.00a)')
}

const percentFilter = (value) => {
    return !value ? '0%' : `₦{Number(value).toFixed(2)}%`
}

const percentageFilter = (value) => {
    return !value ? '0%' : `₦{Number(value).toFixed(2) * 100}%`
}

export { nairaFilter, percentFilter, percentageFilter, timeStamp }