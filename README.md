# Custom eportfolio template

This is a simple, responsive eportifolio template. Designed to look like a resume, it is optimized for readability.

## How to use

Simply copy the `template.html` file to your `index.html` file and edit it, you can use ctrl+f and search or `[ ]` to quickly find all the fields you need to edit. More details within the `template.html` file's comments.

## CSS notes

### Colors:

The template's colors are defined by 8 CSS varaibles located at the top of the 
style sheet.

### Classes of interest:

| class name            | descripiton                                                                                                            |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `name-title`          | Styles your name at the top of the document                                                                            |
| `name-description`    | Styles your job title area below your name                                                                             |
| `section-title`       | Styles the section title (ie "Regular List" in the template)                                                           |
| `section-content`     | Styles the section content below/beside the title                                                                      |
| `double-list-box`     | Styles the it's children in two columns, should only have 2 children, should be used on a `section-content` div        |
| `reg-list`            | List styling - removes the bullet points unless your on mobile                                                         |
| `no-bottom-marg`      | Removes the bottom margin on `li` childern of the element to which it's applied                                        |
| `project-title`       | To be used on project titles, project titles have java integration and should be set up as they are in `template.html` |
| `project-description` | Project description, needs ID set, see comments in `template.html` for more details                                    |


