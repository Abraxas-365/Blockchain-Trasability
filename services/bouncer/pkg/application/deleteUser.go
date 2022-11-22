package application

func (a *application) DeleteUser(companyId string) error {

	if err := a.repo.DeleteUser(companyId); err != nil {
		return err
	}
	return nil
}
