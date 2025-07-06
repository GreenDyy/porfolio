const me = {
    name: 'GreenDyy',
    age: 18,
    email: 'greendyy@gmail.com',
    phone: '0909090909',
    address: '123 Nguyen Van Linh, Q9, TP.HCM',
    gender: 'male',
    isMarried: false,
    isStudent: true,
    isWorking: false,
    lon: {
        a: 45,
        b: 56,
        cac: {
            stupid: true,
            color: 'green',
        }
    }
}

const meFormatted = Object.entries(me)
function flattenObject(obj, prefix = '') {
    let newObj = {}
    let keys = []
    for (const key in obj) {
        // Kiểm tra xem key có phải là thuộc tính trực tiếp của đối tượng không
        // (để tránh các thuộc tính kế thừa)
        if (obj.hasOwnProperty(key)) {
            const currentKeyPath = prefix ? `${prefix}_${key}` : key;
            const value = obj[key];
            newObj[currentKeyPath] = value
            // Nếu giá trị của key hiện tại là một đối tượng và không phải là null
            // và không phải là một mảng (vì mảng thường được xử lý khác)
            if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                // Gọi đệ quy hàm này để lấy các key con của đối tượng lồng nhau
                newObj = { ...newObj, ...flattenObject(value, currentKeyPath) };
            }
        }
    }
    return newObj;
}
const newObj = flattenObject(me)
console.log('newObj', newObj);
console.log( 'sda', newObj['lon.a'])

