package application

func (a *application) DeleteCompany(companyId string) error {

	if err := a.repo.DeleteCompany(companyId); err != nil {
		return err
	}
	return nil
}
