const rawScheduleData = "BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302";

const parsedParts = rawScheduleData.split("-");

const rawDoctor = parsedParts[0];
const rawDepartment = parsedParts[1];
const appointmentTime = parsedParts[2];
const rawRoom = parsedParts[3];

const doctorClean = rawDoctor.replace("BS.", "").replaceAll("_", " ");
const doctorWords = doctorClean.split(" ");
let doctorTitleCase = "";

for (let i = 0; i < doctorWords.length; i++) {
  const word = doctorWords[i];
  if (word.length > 0) {
    const formattedWord = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
    doctorTitleCase += (i === 0 ? "" : " ") + formattedWord;
  }
}

const deptClean = rawDepartment.replaceAll("_", " ");
const deptWords = deptClean.split(" ");
let departmentTitleCase = "";

for (let i = 0; i < deptWords.length; i++) {
  const word = deptWords[i];
  if (word.length > 0) {
    const formattedWord = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
    departmentTitleCase += (i === 0 ? "" : " ") + formattedWord;
  }
}

const roomParts = rawRoom.split("_");
const roomName = roomParts[0].slice(0, 1).toUpperCase() + roomParts[0].slice(1).toLowerCase();
const roomNumber = roomParts[1];
const formattedRoom = `${roomName} ${roomNumber}`;

console.log(`========================================
    THÔNG BÁO PHÂN CÔNG CA TRỰC BÁC SĨ
========================================
Bác sĩ đảm trách : Bác sĩ ${doctorTitleCase}
Chuyên khoa      : ${departmentTitleCase}
Thời gian khám   : ${appointmentTime}
Địa điểm         : ${formattedRoom}
========================================`);