<script>
export default {
  name: "User",
  components: {},
};

$(document).ready(function () {
  var crudServiceBaseUrl = "https://demos.telerik.com/kendo-ui/service",
    dataSource = new kendo.data.DataSource({
      transport: {
        read: {
          url: crudServiceBaseUrl + "/detailproducts",
          dataType: "jsonp",
        },
        update: {
          url: crudServiceBaseUrl + "/detailproducts/Update",
          dataType: "jsonp",
        },
        destroy: {
          url: crudServiceBaseUrl + "/detailproducts/Destroy",
          dataType: "jsonp",
        },
        parameterMap: function (options, operation) {
          if (operation !== "read" && options.models) {
            return { models: kendo.stringify(options.models) };
          }
        },
      },
      batch: true,
      pageSize: 20,
      autoSync: true,
      aggregate: [
        {
          field: "TotalSales",
          aggregate: "sum",
        },
      ],
      group: {
        field: "Category.CategoryName",
        dir: "desc",
        aggregates: [{ field: "TotalSales", aggregate: "sum" }],
      },
      schema: {
        model: {
          id: "ProductID",
          fields: {
            ProductID: { editable: false, nullable: true },
            Discontinued: { type: "boolean", editable: false },
            TotalSales: { type: "number", editable: false },
            TargetSales: { type: "number", editable: false },
            LastSupply: { type: "date" },
            UnitPrice: { type: "number" },
            UnitsInStock: { type: "number" },
            Category: {
              defaultValue: {
                CategoryID: 8,
                CategoryName: "Seafood",
              },
            },
            Country: {
              defaultValue: {
                CountryNameLong: "Bulgaria",
                CountryNameShort: "bg",
              },
            },
          },
        },
      },
    });

  $("#grid").kendoGrid({
    dataSource: dataSource,
    columnMenu: {
      filterable: false,
    },
    height: 680,
    editable: "incell",
    pageable: true,
    sortable: true,
    navigatable: true,
    resizable: true,
    reorderable: true,
    groupable: true,
    filterable: true,
    dataBound: onDataBound,
    toolbar: ["excel", "pdf", "search"],
    columns: [
      {
        selectable: true,
        width: 75,
        attributes: {
          class: "checkbox-align",
        },
        headerAttributes: {
          class: "checkbox-align",
        },
      },
      {
        field: "ProductName",
        title: "Product Name",
         width: 300,
      },
      {
        field: "UnitPrice",
        title: "Price",
        format: "{0:c}",
        width: 105,
      },
      {
        field: "Discontinued",
        title: "In Stock",
        template: "<span id='badge_#=ProductID#' class='badgeTemplate'></span>",
        width: 130,
      },
      {
        field: "Category.CategoryName",
        title: "Category",
        editor: clientCategoryEditor,
        groupHeaderTemplate:
          "Category: #=data.value#, Total Sales: #=kendo.format('{0:c}', aggregates.TotalSales.sum)#",
        width: 125,
      },
      {
        field: "Country.CountryNameLong",
        title: "Country",
       editor: clientCountryEditor,
        width: 120,
      },
      {
        field: "UnitsInStock",
        title: "Units",
        width: 105,
      },
      {
        field: "TotalSales",
        title: "Total Sales",
        format: "{0:c}",
        width: 140,
        aggregates: ["sum"],
      },
      {
        field: "TargetSales",
        title: "Target Sales",
        format: "{0:c}",
        template:
          "<span id='chart_#= ProductID#' class='sparkline-chart'></span>",
        width: 220,
      },
      { command: "destroy", title: "&nbsp;", width: 120 },
    ],
  });
});

function onDataBound(e) {
  var grid = this;
  grid.table.find("tr").each(function () {
    var dataItem = grid.dataItem(this);
    var themeColor = dataItem.Discontinued ? "success" : "error";
    var text = dataItem.Discontinued ? "available" : "not available";

    $(this).find(".badgeTemplate").kendoBadge({
      themeColor: themeColor,
      text: text,
    });

    $(this).find(".rating").kendoRating({
      min: 1,
      max: 5,
      label: false,
      selection: "continuous",
    });

    $(this)
      .find(".sparkline-chart")
      .kendoSparkline({
        legend: {
          visible: false,
        },
        data: [dataItem.TargetSales],
        type: "bar",
        chartArea: {
          margin: 0,
          width: 180,
          background: "transparent",
        },
        seriesDefaults: {
          labels: {
            visible: true,
            format: "{0}%",
            background: "none",
          },
        },
        categoryAxis: {
          majorGridLines: {
            visible: false,
          },
          majorTicks: {
            visible: false,
          },
        },
        valueAxis: {
          type: "numeric",
          min: 0,
          max: 130,
          visible: false,
          labels: {
            visible: false,
          },
          minorTicks: { visible: false },
          majorGridLines: { visible: false },
        },
        tooltip: {
          visible: false,
        },
      });

    kendo.bind($(this), dataItem);
  });
}

function returnFalse() {
  return false;
}

function clientCategoryEditor(container, options) {
  $('<input required name="Category">')
    .appendTo(container)
    .kendoDropDownList({
      autoBind: false,
      dataTextField: "CategoryName",
      dataValueField: "CategoryID",
      dataSource: {
        data: categories,
      },
    });
}

function clientCountryEditor(container, options) {
  $('<input required name="Country">')
    .appendTo(container)
    .kendoDropDownList({
      dataTextField: "CountryNameLong",
      dataValueField: "CountryNameShort",
      template:
        "<div class='dropdown-country-wrap'><img src='../content/web/country-flags/#:CountryNameShort#.png' alt='Kendo UI for jQuery Grid #: CountryNameLong# Flag' title='#: CountryNameLong#' width='30' /><span>#:CountryNameLong #</span></div>",
      dataSource: {
        transport: {
          read: {
            url: " https://demos.telerik.com/kendo-ui/service/countries",
            dataType: "jsonp",
          },
        },
      },
      autoWidth: true,
    });
}

var categories = [
  {
    CategoryID: 1,
    CategoryName: "Beverages",
  },
  {
    CategoryID: 2,
    CategoryName: "Condiments",
  },
  {
    CategoryID: 3,
    CategoryName: "Confections",
  },
  {
    CategoryID: 4,
    CategoryName: "Dairy Products",
  },
  {
    CategoryID: 5,
    CategoryName: "Grains/Cereals",
  },
  {
    CategoryID: 6,
    CategoryName: "Meat/Poultry",
  },
  {
    CategoryID: 7,
    CategoryName: "Produce",
  },
  {
    CategoryID: 8,
    CategoryName: "Seafood",
  },
];
</script>
<template>
  <div class="row">
    <div class="col-lg-12 col-md-12">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-2 col-md-6">
              <div class="form-group">
                <label>Müşteri Tipi</label>
                <select class="form-control">
                  <option value="">Hepsi</option>
                  <option value="">Onay Bekleyen</option>
                  <option value="">Onaylanan</option>
                  <option value="">Rededilen</option>
                </select>
              </div>
            </div>
            <div class="col-lg-2 col-md-6">
              <div class="form-group">
                <label>Müşteri Id</label>
                <span
                  class="k-input k-textbox k-input-solid k-input-md k-rounded-md"
                  style=""
                  ><input
                    id="textbox"
                    data-role="textbox"
                    aria-disabled="false"
                    class="k-input-inner"
                    autocomplete="off"
                    style="width: 100%"
                /></span>
              </div>
            </div>
            <div class="col-lg-2 col-md-6">
              <div class="form-group">
                <label>Telefon No</label>
                <span
                  class="k-input k-textbox k-input-solid k-input-md k-rounded-md"
                  style=""
                  ><input
                    id="textbox"
                    data-role="textbox"
                    aria-disabled="false"
                    class="k-input-inner"
                    autocomplete="off"
                    style="width: 100%"
                /></span>
              </div>
            </div>
            <div class="col-lg-2 col-md-6">
              <div class="form-group">
                <label>Ad</label>
                <span
                  class="k-input k-textbox k-input-solid k-input-md k-rounded-md"
                  style=""
                  ><input
                    id="textbox"
                    data-role="textbox"
                    aria-disabled="false"
                    class="k-input-inner"
                    autocomplete="off"
                    style="width: 100%"
                /></span>
              </div>
            </div>
            <div class="col-lg-2 col-md-6">
              <div class="form-group">
                <label>Soyad</label>
                <span
                  class="k-input k-textbox k-input-solid k-input-md k-rounded-md"
                  style=""
                  ><input
                    id="textbox"
                    data-role="textbox"
                    aria-disabled="false"
                    class="k-input-inner"
                    autocomplete="off"
                    style="width: 100%"
                /></span>
              </div>
            </div>
            <div class="col-lg-2 col-md-6  pt-4 ">
                <button type="button" class="btn btn-outline-primary">Arama</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">grid liste</div>
        <div class="card-body">
          <div id="grid"></div>
        </div>
      </div>
    </div>
  </div>
</template>
