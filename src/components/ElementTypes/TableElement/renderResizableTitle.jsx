let startX = 0;
let startWidth = 0;
let resizingColumnIndex = null;
let currentCol = null

const handleResize = (columnIndex, currentCol, offsetX , lang , element) => {
  var cols = window.document.querySelectorAll(
    `#col-${element?.id}-${Number.isInteger(currentCol?.key) ? currentCol?.key : currentCol?.key.replace(/\./g, "\\.")}`
  );
  var newWidth = "";
  if (cols) {
    cols?.forEach((col, index) => {
      if(!col.id.includes(currentCol?.element?.id) ){
        return
      }
      if (!newWidth) {
        var finalWidth =
          lang == "ar"
            ? parseInt(col.getBoundingClientRect().right) - offsetX
            : offsetX - parseInt(col.getBoundingClientRect().left);
        finalWidth = finalWidth <= 50 ? 50 : finalWidth;
        newWidth = finalWidth;
      }
      col.style.width = `${newWidth}px`;
    });
  }
};

const handleMouseMove = (e , lang , element) => {
  if (resizingColumnIndex !== null) {
    handleResize(resizingColumnIndex, currentCol, e.pageX , lang , element);
  }
};

export const renderResizableTitle = (column, columnIndex, lang , columns , element) => {
  return (
    <div
      id={`col-${element?.id}-${column?.key}`}
      className="resizable-title default-data-div"
      style={{
        display: "flex",
        width:
          column.key == "sort"
            ? "40px"
            : column.key !== "moreAction"
            ? column.defaultWidth
            : column.defaultWidth
            ? `${column.defaultWidth}px`
            : "300px",
      }}
    >
      <p
        style={{
          fontWeight: "400",
          userSelect: "none",
          maxWidth: "max-content",
        }}
      >
        {column.title}
      </p>
      <div
        style={{
          display: "flex",
          marginLeft: lang == "ar" ? "" : "auto",
          marginRight: lang == "ar" ? "auto" : "",
          gap: "5px",
          transform: lang == "ar" ? "translateX(+5px)" : "translateX(-5px)",
        }}
      >
        {column?.customSorter && <column.customSorter />}
        {column?.FilterRender && (
          <column.FilterRender />
        )}
      </div>
      {column.key !== "moreAction" && column.key !== "sort" && (
        <div
          className="resizable-handle"
          onMouseDown={(e) => handleMouseDown(e, columnIndex, column , columns , lang , element)}
        />
      )}
    </div>
  );
};

const handleMouseDown = (e, columnIndex, column , columns , lang , element) => {
  startX = e.pageX;
  startWidth = parseInt(columns.find((i) => i.key == columnIndex).width);
  resizingColumnIndex = columnIndex;
  currentCol = column;
  document.addEventListener("mousemove", (e) => handleMouseMove(e , lang , element));
  document.addEventListener("mouseup", handleMouseUp);
};

const handleMouseUp = () => {
  resizingColumnIndex = null;
  currentCol = null
  document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("mouseup", handleMouseUp);
};
