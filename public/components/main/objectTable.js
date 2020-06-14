import React from "react";
import axios from "axios";
import '../../../public/app.css';
import {
  EuiInMemoryTable,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiOverlayMask,
  EuiButton,
  EuiTextArea,
} from "@elastic/eui";

class objectTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listData: [],
      listDataMap: [],
      isMapReady: false,
      isModalVisible: false,
      cssValue: [],
      isCreateRecord: false,
      selectedId: null,
      selectedName: null
    };
  }

  getTableData() {
    axios
      .get(
        "/api/kibana/management/saved_objects/_find?fields=id&type=dashboard"
      )
      .then((response) => {
        this.setState({
          listData: response.data.saved_objects,
          isMapReady: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  openModal = (event) => {
    axios
      .get(`/api/custom-css/getObjectCss?objectId=${event.id}`)
      .then((response) => {
        this.setState({
          cssValue: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
      console.log(event)
    this.setState({
      isModalVisible: true, selectedId: event.id, selectedName: event.title
    });
  };

  componentDidMount() {
    this.getTableData();
  }

  render() {
    const closeModal = () => this.setState({ isModalVisible: false });
    const showModal = () => this.setState({ isModalVisible: true });
    const saveModal = () =>
      this.setState({ isCreateRecord: true, isModalVisible: false });

    const onChange = (e) => {
      this.setState({
        cssValue: e.target.value,
      });
    };

    let modal;

    if (this.state.isCreateRecord) {
      console.log(document.querySelector("#custom-css-textarea").value);
      {
        closeModal;
      }
      this.setState({
        isCreateRecord: false,
      });

      axios
        .post(
          "/api/custom-css/saveObjectCss",
          {
            cssData: this.state.cssValue,
            cssId: this.state.selectedId
          },
          {
            headers: {
              "Content-Type": "application/json",
              "kbn-xsrf": "anything",
              Accept: "application/json, text/plain, */*",
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }

    if (this.state.isModalVisible) {
      modal = (
        <EuiOverlayMask>
          <EuiModal onClose={closeModal}>
            <EuiModalHeader>
              <EuiModalHeaderTitle>Edit CSS for {this.state.selectedName}</EuiModalHeaderTitle>
            </EuiModalHeader>

            <EuiModalBody>
              <EuiTextArea
                id="custom-css-textarea"
                placeholder="Placeholder text"
                aria-label="Use aria labels when no actual label is in use"
                value={this.state.cssValue}
                onChange={(e) => onChange(e)}
                className="textareaModal"
              />
            </EuiModalBody>

            <EuiModalFooter>
              <EuiButton onClick={closeModal} fill>
                Cancel
              </EuiButton>
              <EuiButton onClick={saveModal} fill>
                Save
              </EuiButton>
            </EuiModalFooter>
          </EuiModal>
        </EuiOverlayMask>
      );
    }

    let columns = [
      {
        field: "type",
        name: "Object Type",
        sortable: true,
        width: "150px",
      },
      {
        field: "id",
        name: "Object ID",
        sortable: true,
      },
      {
        field: "title",
        name: "Object Name",
        sortable: true,
      },
      {
        name: "Edit",
        width: "50px",
        actions: [
          {
            name: "Edit",
            description: "Edit Record",
            type: "icon",
            icon: "documentEdit",
            onClick: (event) => {
              this.openModal(event);
            },
          },
        ],
      },
    ];

    let search = {
      box: {
        schema: true,
      },
    };

    if (this.state.isMapReady) {
      const mappedData = this.state.listData.map((o) => ({
        id: o.id,
        title: o.meta.title,
        type: o.type,
      }));

      this.setState({ listDataMap: mappedData, isMapReady: false });
    }

    return (
      <div>
        <EuiInMemoryTable
          items={this.state.listDataMap}
          columns={columns}
          search={search}
          sorting={true}
          pagination={true}
        />
        {modal}
      </div>
    );
  }
}

export default objectTable;
