import React, { useEffect, useState } from "react";

const DataDisplay = () => {
  const [data, setData] = useState([]); // Khởi tạo với mảng rỗng
  const [error, setError] = useState(null); // Thêm trạng thái để xử lý lỗi
  const [loading, setLoading] = useState(true); // Trạng thái chờ khi tải dữ liệu

  useEffect(() => {
    fetch("/db.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        setData(json); // Gán dữ liệu vào state
        setLoading(false); // Dữ liệu đã tải xong
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message); // Lưu thông báo lỗi
        setLoading(false); // Ngừng trạng thái chờ
      });
  }, []);

  if (loading) {
    return React.createElement("div", null, "Đang tải dữ liệu...");
  }

  if (error) {
    return React.createElement(
      "div",
      { style: { color: "red" } },
      `Có lỗi xảy ra: ${error}`
    );
  }

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Dữ liệu từ db.json"),
    React.createElement(
      "ul",
      null,
      Array.isArray(data) && data.length > 0
        ? data.map((item) =>
            React.createElement("li", { key: item.id }, item.name)
          )
        : React.createElement("li", null, "Không có dữ liệu để hiển thị")
    )
  );
};

export default DataDisplay;
