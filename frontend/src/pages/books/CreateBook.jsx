import { Fragment } from "react";

import FormInput from "../../components/common/FormInput";

function CreateBookPage() {
  return (
    <Fragment>
      <div className="tg-sectionspace tg-haslayout">
        <div className="container">
          <div className="row">
            <div
              className="alert alert-success alert-dismissible show"
              role="alert"
            >
              <strong>fczasd</strong>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="alert alert-danger alert-dismissible show"
              role="alert"
            >
              <strong>dasdsa</strong>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="panel panel-default login-card"
              style="max-width:100%;"
            >
              <div className="tg-contactus panel-body">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div
                    className="tg-sectionhead text-center border-0 pb-2"
                    style="padding-right:0;"
                  >
                    <h2 className="d-block w-100 pt-4">Add Book</h2>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <form
                    className="tg-formtheme tg-formcontactus"
                    id="book_add"
                    method="POST"
                    action="books.store"
                    enctype="multipart/form-data"
                  >
                    <fieldset
                      className="fieldset form-group"
                      style="margin-top:10px;"
                    >
                      <legend className="small font-16">Upload Type</legend>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group d-flex">
                            <label
                              for="upload_type_manual"
                              className="col-form-label text-md-end"
                              style="margin-right:10px;"
                            >
                              Manual{" "}
                            </label>
                            <input
                              type="radio"
                              value="manual"
                              checked
                              id="upload_type_manual"
                              name="upload_type"
                            />
                          </div>
                          <div className="form-group d-flex">
                            <label
                              for="upload_type_isbn"
                              className="col-form-label text-md-end"
                              style="margin-right:10px;"
                            >
                              ISBN
                            </label>
                            <input
                              type="radio"
                              value="isbn"
                              id="upload_type_isbn"
                              name="upload_type"
                            />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="form-group w-100" id="isbn_div">
                            <div className="col-md-8">
                              <input
                                id="check_isbn"
                                type="text"
                                className="form-control"
                                name="check_isbn"
                                autocomplete="check_isbn"
                                placeholder="Enter ISBN"
                                onkeyup="removeHiphen()"
                              />
                            </div>
                            <div className="col-md-4">
                              <button
                                type="button"
                                className="btn btn-success"
                                id="get_details_btn"
                              >
                                Get Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="fieldset form-group add-form">
                      <legend className="small font-16">
                        Book Information
                      </legend>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group w-100">
                            <label
                              for="title"
                              className="col-form-label text-md-start"
                            >
                              Name
                              <span className="mandatory text-danger">*</span>
                            </label>

                            <div className="w-100">
                              <input
                                id="title"
                                type="text"
                                className="form-control @error('title') is-invalid @enderror"
                                name="title"
                                value="title"
                                autocomplete="title"
                                autofocus
                              />

                              <span className="invalid-feedback" role="alert">
                                <strong>fddsa</strong>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group w-100">
                            <label
                              for="author"
                              className="col-form-label text-md-start"
                            >
                              Author
                              <span className="mandatory text-danger">*</span>
                            </label>

                            <div className="w-100">
                              <input
                                id="author"
                                type="text"
                                className="form-control @error('author') is-invalid @enderror"
                                name="author"
                                value="author"
                                autocomplete="author"
                              />

                              <span className="invalid-feedback" role="alert">
                                <strong>fddsa</strong>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group w-100">
                            <label
                              for="Genre"
                              className="col-form-label text-md-start"
                            >
                              Genre
                              <span className="mandatory text-danger">*</span>
                            </label>

                            <div className="w-100">
                              <select
                                className="multiselect"
                                multiple="multiple"
                                role="multiselect"
                                id="genre"
                                className="@error('genre') is-invalid @enderror"
                                name="genre[]"
                              >
                                <option value="">dasd</option>
                              </select>

                              <span className="invalid-feedback" role="alert">
                                <strong>fddsa</strong>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group w-100">
                            <label
                              for="age_group"
                              className="col-form-label text-md-start"
                            >
                              Age Group
                              <span className="mandatory text-danger">*</span>
                            </label>

                            <div className="w-100">
                              <select
                                id="age_group"
                                type="text"
                                className="form-control @error('age_group') is-invalid @enderror"
                                name="age_group"
                                value="{{ old('age_group') }}"
                                autocomplete="age_group"
                                autofocus
                              >
                                <option value="lllj">dasdsa</option>
                              </select>

                              <span className="invalid-feedback" role="alert">
                                <strong>fddsa</strong>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group w-100">
                            <label
                              for="is_series"
                              className="col-form-label text-md-start"
                            >
                              Part Of a Series
                              <span className="mandatory text-danger">*</span>
                            </label>

                            <div className="w-100 d-flex">
                              <div className="d-flex">
                                <input
                                  type="radio"
                                  value="Yes"
                                  checked
                                  id="is_series_yes"
                                  name="is_series"
                                  className="p-0 m-0"
                                />
                                &nbsp;&nbsp;
                                <label for="is_series_yes" className="p-0 m-0">
                                  Yes
                                </label>
                              </div>
                              <div className="d-flex" style="margin-left:15px;">
                                <input
                                  type="radio"
                                  value="No"
                                  checked
                                  id="is_series_no"
                                  name="is_series"
                                  className="p-0 m-0"
                                />
                                &nbsp;&nbsp;
                                <label for="is_series_no" className="p-0 m-0">
                                  No
                                </label>
                              </div>
                              <div className="w-100">
                                <span className="invalid-feedback" role="alert">
                                  <strong>fddsa</strong>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group w-100">
                            <label
                              for="series_no"
                              className="col-form-label text-md-start"
                            >
                              Series No
                              <span className="mandatory text-danger">*</span>
                            </label>

                            <div className="w-100">
                              <input
                                id="series_no"
                                type="text"
                                className="form-control @error('series_no') is-invalid @enderror"
                                name="series_no"
                                value="{{ old('series_no') }}"
                                autocomplete="series_no"
                                autofocus
                              />
                              <span className="invalid-feedback" role="alert">
                                <strong>fddsa</strong>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group w-100">
                            <label
                              for="publisher"
                              className="col-form-label text-md-start"
                            >
                              Publisher
                              <span className="mandatory text-danger"></span>
                            </label>

                            <div className="w-100">
                              <input
                                id="publisher"
                                type="text"
                                className="form-control @error('publisher') is-invalid @enderror"
                                name="publisher"
                                value="{{ old('publisher') }}"
                                autocomplete="publisher"
                                autofocus
                              />

                              <span className="invalid-feedback" role="alert">
                                <strong>fddsa</strong>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group w-100">
                            <label
                              for="isbn_10"
                              className="col-form-label text-md-start"
                            >
                              ISBN 10
                            </label>

                            <div className="w-100">
                              <input
                                id="isbn_10"
                                type="text"
                                className="form-control @error('isbn_10') is-invalid @enderror"
                                name="isbn_10"
                                value="{{ old('isbn_10') }}"
                                autocomplete="isbn_10"
                                autofocus
                              />

                              <span className="invalid-feedback" role="alert">
                                <strong>fddsa</strong>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group w-100">
                            <label
                              for="isbn_13"
                              className="col-form-label text-md-start"
                            >
                              ISBN 13
                            </label>

                            <div className="w-100">
                              <input
                                id="isbn_13"
                                type="text"
                                className="form-control @error('isbn_13') is-invalid @enderror"
                                name="isbn_13"
                                value="{{ old('isbn_13') }}"
                                autocomplete="isbn_13"
                                autofocus
                              />

                              <span className="invalid-feedback" role="alert">
                                <strong>fddsa</strong>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group w-100">
                            <label
                              for="lending_period"
                              className="col-form-label text-md-start"
                            >
                              Period Of Lending (In Days)
                              <span className="mandatory text-danger">*</span>
                            </label>

                            <div className="w-100">
                              <input
                                id="lending_period"
                                type="number"
                                className="form-control @error('lending_period') is-invalid @enderror"
                                name="lending_period"
                                value="{{ old('lending_period') }}"
                                autocomplete="lending_period"
                                autofocus
                              />

                              <span className="invalid-feedback" role="alert">
                                <strong>fddsa</strong>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group w-100">
                            <label
                              for="penalty_per_day"
                              className="col-form-label text-md-start"
                            >
                              Penalty For Late Return (Per Day)
                              <span className="mandatory text-danger">*</span>
                            </label>

                            <div className="w-100">
                              <input
                                id="penalty_per_day"
                                type="number"
                                className="form-control @error('penalty_per_day') is-invalid @enderror"
                                name="penalty_per_day"
                                value="{{ old('penalty_per_day') }}"
                                autocomplete="penalty_per_day"
                                autofocus
                              />

                              <span className="invalid-feedback" role="alert">
                                <strong>fddsa</strong>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group w-100">
                            <label
                              for="penalty_for_damage"
                              className="col-form-label text-md-start"
                            >
                              Penalty for Damage
                              <span className="mandatory text-danger">*</span>
                            </label>

                            <div className="w-100">
                              <input
                                id="penalty_for_damage"
                                type="number"
                                className="form-control @error('penalty_per_day') is-invalid @enderror"
                                name="penalty_for_damage"
                                value="{{ env('BOOK_PENALTY_FOR_DAMAGE') }}"
                                autocomplete="penalty_for_damage"
                                readonly="readonly"
                              />

                              <span className="invalid-feedback" role="alert">
                                <strong>fddsa</strong>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group  w-100" id="image_div">
                            <label
                              for="image"
                              className="col-form-label text-md-start"
                            >
                              Upload Cover
                              <span className="mandatory text-danger"></span>
                            </label>

                            <div className="w-100">
                              <input
                                id="image"
                                type="file"
                                className="form-control @error('image') is-invalid @enderror"
                                name="image"
                                value="{{ old('image') }}"
                                autocomplete="image"
                                autofocus
                              />

                              <span className="invalid-feedback" role="alert">
                                <strong>fddsa</strong>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group w-100">
                            <label
                              for="whatsapp_no"
                              className="col-form-label text-md-start"
                            ></label>

                            <div className="w-100">
                              <img src="" id="book_image" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group w-100">
                            <label
                              for="penalty_per_day"
                              className="col-form-label text-md-start"
                            >
                              Upload Image from Mobile
                              <span className="mandatory text-danger">*</span>
                            </label>

                            <div className="w-100">qrCode</div>
                          </div>
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="fieldset form-group add-form">
                      <legend className="small font-16">
                        Picture of cover page
                      </legend>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="pb-4">
                            <span
                              onClick="openCamera()"
                              id="open_camera_btn"
                              className="btn btn-info"
                            >
                              Open Camera
                            </span>
                            <span
                              onClick="closeCamera()"
                              id="close_camera_btn"
                              className="btn btn-light"
                            >
                              Close Camera
                            </span>
                          </div>
                        </div>
                        <div className="col-md-6 p-0">
                          <div id="my_camera"></div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 text-center py-4">
                          <input
                            type="button"
                            className="btn btn-info"
                            value="Take Snapshot"
                            id="take_snapshot_btn"
                            onClick="take_snapshot()"
                          />
                          <input
                            type="hidden"
                            id="capture_1"
                            name="cam_image[]"
                            className="image-tag"
                          />
                          <input
                            type="hidden"
                            id="capture_2"
                            name="cam_image[]"
                            className="image-tag"
                          />
                          <input
                            type="hidden"
                            id="capture_3"
                            name="cam_image[]"
                            className="image-tag"
                          />
                          <input
                            type="hidden"
                            id="capture_count"
                            name="capture_count"
                            className="image-tag"
                            value="0"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 form-group w-100">
                          <div id="results" className="overflow-hidden">
                            <span>Your captured image will appear here...</span>
                          </div>
                          <div className="py-4 w-100 text-center">
                            <button className="btn btn-success">Submit</button>
                          </div>
                        </div>
                      </div>
                    </fieldset>

                    <div className="row mb-0 add-form-button">
                      <div className="col-md-12 text-center">
                        <button type="submit" className="btn btn-primary">
                          Save
                        </button>
                        <a href="{{ route('books.list') }}">
                          <button type="button" className="btn btn-secondary">
                            Cancel
                          </button>
                        </a>
                      </div>
                    </div>
                    <input
                      type="hidden"
                      name="image_thumbnail"
                      id="image_thumbnail"
                      val=""
                    />
                    <input
                      type="hidden"
                      name="image_thumbnail_small"
                      id="image_thumbnail_small"
                      val=""
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CreateBookPage;
